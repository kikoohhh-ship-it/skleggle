const path = require("path");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const Redis = require("ioredis");
const { createAdapter } = require("@socket.io/redis-adapter");

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const REDIS_URL = process.env.REDIS_URL || "";
const LOBBY_TTL_SECONDS = 60 * 60 * 12;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let lobbyStore = new MemoryLobbyStore();

app.use(express.static(ROOT));

app.get("/health", async (_request, response) => {
  response.json({
    ok: true,
    lobbies: await lobbyStore.countLobbies(),
    redis: lobbyStore.kind,
  });
});

app.get("*", (_request, response) => {
  response.sendFile(path.join(ROOT, "index.html"));
});

start().catch((error) => {
  console.error("Failed to start 3D Skleggle server:", error);
  process.exit(1);
});

async function start() {
  if (REDIS_URL) {
    const pubClient = new Redis(REDIS_URL, {
      maxRetriesPerRequest: null,
      enableReadyCheck: true,
      lazyConnect: true,
    });
    const subClient = pubClient.duplicate();
    const storeClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect(), storeClient.connect()]);
    io.adapter(createAdapter(pubClient, subClient));
    lobbyStore = new RedisLobbyStore(storeClient);
    console.log("Using Redis-backed lobby store.");
  } else {
    console.warn("REDIS_URL not set. Falling back to in-memory lobby store.");
  }

  registerSocketHandlers();

  server.listen(PORT, () => {
    console.log(`3D Skleggle running on http://localhost:${PORT}`);
  });
}

function registerSocketHandlers() {
  io.on("connection", (socket) => {
    socket.emit("server_ready", { ok: true });

    socket.on("host_lobby", async (payload = {}) => {
      try {
        await leaveLobby(socket);

        const requestedRoomCode = normalizeRoomCode(payload.roomCode);
        if (requestedRoomCode && await lobbyStore.hasLobby(requestedRoomCode)) {
          socket.emit("lobby_error", { message: `Lobby code ${requestedRoomCode} is already in use.` });
          return;
        }

        const roomCode = requestedRoomCode || await generateRoomCode();
        const playerName = sanitizePlayerName(payload.playerName);
        const lobby = {
          roomCode,
          hostId: socket.id,
          stateSnapshot: payload.stateSnapshot || null,
          players: {
            [socket.id]: playerName,
          },
        };

        await lobbyStore.setLobby(roomCode, lobby);
        await lobbyStore.setSocketLobby(socket.id, roomCode);
        await socket.join(roomCode);

        socket.emit("joined_lobby", {
          roomCode,
          stateSnapshot: lobby.stateSnapshot,
          message: `Hosting lobby ${roomCode}.`,
        });
      } catch (error) {
        handleSocketError(socket, error, "Unable to create lobby.");
      }
    });

    socket.on("join_lobby", async (payload = {}) => {
      try {
        await leaveLobby(socket);

        const roomCode = normalizeRoomCode(payload.roomCode);
        const lobby = roomCode ? await lobbyStore.getLobby(roomCode) : null;
        if (!lobby) {
          socket.emit("lobby_error", { message: `Lobby ${roomCode || "unknown"} does not exist.` });
          return;
        }

        const playerName = sanitizePlayerName(payload.playerName);
        lobby.players = lobby.players || {};
        lobby.players[socket.id] = playerName;

        await lobbyStore.setLobby(roomCode, lobby);
        await lobbyStore.setSocketLobby(socket.id, roomCode);
        await socket.join(roomCode);

        socket.emit("joined_lobby", {
          roomCode,
          stateSnapshot: lobby.stateSnapshot,
          message: `Joined lobby ${roomCode}.`,
        });

        socket.to(roomCode).emit("lobby_status", {
          message: `${playerName} joined ${roomCode}.`,
        });
      } catch (error) {
        handleSocketError(socket, error, "Unable to join lobby.");
      }
    });

    socket.on("push_state", async (payload = {}) => {
      try {
        const roomCode = await lobbyStore.getSocketLobby(socket.id);
        if (!roomCode || !payload.stateSnapshot) {
          return;
        }

        const lobby = await lobbyStore.getLobby(roomCode);
        if (!lobby) {
          await lobbyStore.deleteSocketLobby(socket.id);
          return;
        }

        lobby.stateSnapshot = payload.stateSnapshot;
        await lobbyStore.setLobby(roomCode, lobby);

        socket.to(roomCode).emit("state_sync", {
          roomCode,
          stateSnapshot: lobby.stateSnapshot,
        });
      } catch (error) {
        handleSocketError(socket, error, "Unable to sync lobby state.");
      }
    });

    socket.on("leave_lobby", async () => {
      try {
        await leaveLobby(socket, true);
      } catch (error) {
        handleSocketError(socket, error, "Unable to leave lobby.");
      }
    });

    socket.on("disconnect", async () => {
      try {
        await leaveLobby(socket);
      } catch (error) {
        console.error("disconnect cleanup failed:", error);
      }
    });
  });
}

async function leaveLobby(socket, notifySelf = false) {
  const roomCode = await lobbyStore.getSocketLobby(socket.id);
  if (!roomCode) {
    if (notifySelf) {
      socket.emit("lobby_left");
    }
    return;
  }

  await socket.leave(roomCode);
  await lobbyStore.deleteSocketLobby(socket.id);

  const lobby = await lobbyStore.getLobby(roomCode);
  if (!lobby) {
    if (notifySelf) {
      socket.emit("lobby_left");
    }
    return;
  }

  lobby.players = lobby.players || {};
  delete lobby.players[socket.id];

  if (Object.keys(lobby.players).length === 0) {
    await lobbyStore.deleteLobby(roomCode);
  } else {
    if (lobby.hostId === socket.id) {
      lobby.hostId = Object.keys(lobby.players)[0];
    }
    await lobbyStore.setLobby(roomCode, lobby);
  }

  if (notifySelf) {
    socket.emit("lobby_left");
  }

  socket.to(roomCode).emit("lobby_status", {
    message: "A player left the lobby.",
  });
}

async function generateRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let roomCode = "";

  do {
    roomCode = Array.from({ length: 6 }, () => {
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    }).join("");
  } while (await lobbyStore.hasLobby(roomCode));

  return roomCode;
}

function sanitizePlayerName(value) {
  const trimmed = String(value || "").trim();
  return trimmed.slice(0, 24) || "Player";
}

function normalizeRoomCode(value) {
  const trimmed = String(value || "").trim().toUpperCase();
  return trimmed.slice(0, 6);
}

function handleSocketError(socket, error, message) {
  console.error(message, error);
  socket.emit("lobby_error", { message });
}

class MemoryLobbyStore {
  constructor() {
    this.kind = "memory";
    this.lobbies = new Map();
    this.socketLobby = new Map();
  }

  async countLobbies() {
    return this.lobbies.size;
  }

  async hasLobby(roomCode) {
    return this.lobbies.has(roomCode);
  }

  async getLobby(roomCode) {
    const lobby = this.lobbies.get(roomCode);
    return lobby ? structuredClone(lobby) : null;
  }

  async setLobby(roomCode, lobby) {
    this.lobbies.set(roomCode, structuredClone(lobby));
  }

  async deleteLobby(roomCode) {
    this.lobbies.delete(roomCode);
  }

  async getSocketLobby(socketId) {
    return this.socketLobby.get(socketId) || null;
  }

  async setSocketLobby(socketId, roomCode) {
    this.socketLobby.set(socketId, roomCode);
  }

  async deleteSocketLobby(socketId) {
    this.socketLobby.delete(socketId);
  }
}

class RedisLobbyStore {
  constructor(redis) {
    this.kind = "redis";
    this.redis = redis;
  }

  async countLobbies() {
    return this.redis.scard("skleggle:lobbies");
  }

  async hasLobby(roomCode) {
    const exists = await this.redis.exists(getLobbyKey(roomCode));
    return exists === 1;
  }

  async getLobby(roomCode) {
    const raw = await this.redis.get(getLobbyKey(roomCode));
    if (!raw) {
      return null;
    }
    await this.redis.expire(getLobbyKey(roomCode), LOBBY_TTL_SECONDS);
    return JSON.parse(raw);
  }

  async setLobby(roomCode, lobby) {
    await this.redis.multi()
      .set(getLobbyKey(roomCode), JSON.stringify(lobby), "EX", LOBBY_TTL_SECONDS)
      .sadd("skleggle:lobbies", roomCode)
      .exec();
  }

  async deleteLobby(roomCode) {
    await this.redis.multi()
      .del(getLobbyKey(roomCode))
      .srem("skleggle:lobbies", roomCode)
      .exec();
  }

  async getSocketLobby(socketId) {
    const key = getSocketLobbyKey(socketId);
    const roomCode = await this.redis.get(key);
    if (roomCode) {
      await this.redis.expire(key, LOBBY_TTL_SECONDS);
    }
    return roomCode;
  }

  async setSocketLobby(socketId, roomCode) {
    await this.redis.set(getSocketLobbyKey(socketId), roomCode, "EX", LOBBY_TTL_SECONDS);
  }

  async deleteSocketLobby(socketId) {
    await this.redis.del(getSocketLobbyKey(socketId));
  }
}

function getLobbyKey(roomCode) {
  return `skleggle:lobby:${roomCode}`;
}

function getSocketLobbyKey(socketId) {
  return `skleggle:socket:${socketId}`;
}
