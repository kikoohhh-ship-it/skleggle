const path = require("path");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const lobbies = new Map();
const socketLobby = new Map();

app.use(express.static(ROOT));

app.get("/health", (_request, response) => {
  response.json({ ok: true, lobbies: lobbies.size });
});

app.get("*", (_request, response) => {
  response.sendFile(path.join(ROOT, "index.html"));
});

io.on("connection", (socket) => {
  socket.emit("server_ready", { ok: true });

  socket.on("host_lobby", (payload = {}) => {
    leaveLobby(socket);

    const requestedRoomCode = normalizeRoomCode(payload.roomCode);
    if (requestedRoomCode && lobbies.has(requestedRoomCode)) {
      socket.emit("lobby_error", { message: `Lobby code ${requestedRoomCode} is already in use.` });
      return;
    }

    const roomCode = requestedRoomCode || generateRoomCode();
    const lobby = {
      roomCode,
      hostId: socket.id,
      stateSnapshot: payload.stateSnapshot || null,
      players: new Map([[socket.id, sanitizePlayerName(payload.playerName)]]),
    };

    lobbies.set(roomCode, lobby);
    socketLobby.set(socket.id, roomCode);
    socket.join(roomCode);

    socket.emit("joined_lobby", {
      roomCode,
      stateSnapshot: lobby.stateSnapshot,
      message: `Hosting lobby ${roomCode}.`,
    });
  });

  socket.on("join_lobby", (payload = {}) => {
    leaveLobby(socket);

    const roomCode = normalizeRoomCode(payload.roomCode);
    const lobby = lobbies.get(roomCode);
    if (!lobby) {
      socket.emit("lobby_error", { message: `Lobby ${roomCode || "unknown"} does not exist.` });
      return;
    }

    lobby.players.set(socket.id, sanitizePlayerName(payload.playerName));
    socketLobby.set(socket.id, roomCode);
    socket.join(roomCode);

    socket.emit("joined_lobby", {
      roomCode,
      stateSnapshot: lobby.stateSnapshot,
      message: `Joined lobby ${roomCode}.`,
    });

    socket.to(roomCode).emit("lobby_status", {
      message: `${sanitizePlayerName(payload.playerName)} joined ${roomCode}.`,
    });
  });

  socket.on("push_state", (payload = {}) => {
    const roomCode = socketLobby.get(socket.id);
    const lobby = roomCode ? lobbies.get(roomCode) : null;
    if (!lobby || !payload.stateSnapshot) {
      return;
    }

    lobby.stateSnapshot = payload.stateSnapshot;
    socket.to(roomCode).emit("state_sync", {
      roomCode,
      stateSnapshot: lobby.stateSnapshot,
    });
  });

  socket.on("leave_lobby", () => {
    leaveLobby(socket, true);
  });

  socket.on("disconnect", () => {
    leaveLobby(socket);
  });
});

server.listen(PORT, () => {
  console.log(`3D Skleggle running on http://localhost:${PORT}`);
});

function leaveLobby(socket, notifySelf = false) {
  const roomCode = socketLobby.get(socket.id);
  if (!roomCode) {
    return;
  }

  const lobby = lobbies.get(roomCode);
  socket.leave(roomCode);
  socketLobby.delete(socket.id);

  if (!lobby) {
    if (notifySelf) {
      socket.emit("lobby_left");
    }
    return;
  }

  lobby.players.delete(socket.id);

  if (lobby.players.size === 0) {
    lobbies.delete(roomCode);
  } else if (lobby.hostId === socket.id) {
    lobby.hostId = lobby.players.keys().next().value;
  }

  if (notifySelf) {
    socket.emit("lobby_left");
  }

  socket.to(roomCode).emit("lobby_status", {
    message: "A player left the lobby.",
  });
}

function generateRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let roomCode = "";

  do {
    roomCode = Array.from({ length: 6 }, () => {
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    }).join("");
  } while (lobbies.has(roomCode));

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
