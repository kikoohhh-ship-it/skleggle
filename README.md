# 3D Skleggle

Browser-based tabletop game board with a faux-3D play surface, draggable characters and houses, card deck handling, and a lightweight Socket.IO lobby server for shared rooms.

## What Is Included

- Static frontend:
  - [index.html](/Users/santos/Documents/3D%20Skleggle/index.html)
  - [app.js](/Users/santos/Documents/3D%20Skleggle/app.js)
  - [style.css](/Users/santos/Documents/3D%20Skleggle/style.css)
- Built-in Node server for hosting the site and multiplayer lobbies:
  - [server.js](/Users/santos/Documents/3D%20Skleggle/server.js)
- Deployment config for Render:
  - [render.yaml](/Users/santos/Documents/3D%20Skleggle/render.yaml)

## Run Locally

Install dependencies:

```bash
cd "/Users/santos/Documents/3D Skleggle"
npm install
```

Start the app:

```bash
npm run dev
```

Then open:

- [http://localhost:3000](http://localhost:3000)

This runs both:

- the website
- the multiplayer Socket.IO server

## Multiplayer Flow

1. Open the site in two browser tabs or on two devices.
2. In the `Multiplayer` panel, click `Host Lobby` on one device.
3. Copy the shown room code.
4. On the other device, enter that code and click `Join Lobby`.
5. Changes to the shared board state will sync through the server snapshot layer.

Current multiplayer scope:

- lobby hosting/joining
- shared board snapshot sync
- hosted website from the same Node server

This is a practical first version, not a full conflict-resolved game server yet.

## Publish As A Website

For this project, the cleanest option is Render or Railway because the game now needs:

- static file hosting
- a Node server
- WebSocket support for multiplayer

### Render

1. Push this folder to GitHub.
2. Create a new Render web service from that GitHub repo.
3. Render should detect [render.yaml](/Users/santos/Documents/3D%20Skleggle/render.yaml).
4. Confirm:
   - Build command: `npm install`
   - Start command: `npm start`
5. Deploy.

After deployment, your game will be live on a Render URL like:

- `https://your-app-name.onrender.com`

### Custom Domain

After the site is live:

1. Buy a domain from a registrar like Namecheap, Porkbun, or Squarespace Domains.
2. Open your hosting provider’s custom domain settings.
3. Point your domain DNS records to the deployed service.

Typical setup:

- `skleggle.com` -> your Render site
- optional subdomain later if you split backend and frontend

## Suggested Next Steps

- move game rules and validation fully to the server
- track players/permissions per lobby
- persist lobbies in Redis or Postgres
- add reconnect handling and saved matches
- add authentication if you want public accounts

## Files To Know

- [app.js](/Users/santos/Documents/3D%20Skleggle/app.js): client UI, board rendering, local game state, lobby sync hooks
- [server.js](/Users/santos/Documents/3D%20Skleggle/server.js): static hosting plus Socket.IO lobby server
- [package.json](/Users/santos/Documents/3D%20Skleggle/package.json): runtime dependencies and scripts
- [render.yaml](/Users/santos/Documents/3D%20Skleggle/render.yaml): Render deployment config
