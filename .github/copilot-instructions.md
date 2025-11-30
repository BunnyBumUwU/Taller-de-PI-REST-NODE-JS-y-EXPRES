# Copilot / AI Agent Instructions for this repository

This repo is a small, single-file Express REST example (Spanish-language names). The goal of these instructions is to make an AI coding agent productive immediately by describing structure, workflows, conventions and examples found in the codebase.

1) Big picture
- **Type:** Node.js (CommonJS) Express app.
- **Main entry:** `index.js` (single-process HTTP server).
- **Data layer:** in-memory array `usuarios` inside `index.js` (no database).
- **HTTP surface:** GET `/`, GET `/saludo`, and CRUD routes on `/user` (GET, POST, PUT `/user/:id`, DELETE `/user/:id`).
- **Port:** hardcoded to `3000` in `index.js` (change in file to use another port).

2) Key files to read
- `index.js` — application logic, routes, middleware and mock data.
- `package.json` — scripts and runtime deps (`express`, `nodemon`).

3) Developer workflows (how to run / debug)
- Install deps: `npm install`.
- Dev (auto-restart): `npm run dev` (runs `nodemon index.js`).
- Run directly: `node index.js`.
- Note: `PORT` is not environment-driven in the current code — change the `const PORT = 3000` line if you need a different port or refactor to `process.env.PORT || 3000`.

4) Project-specific conventions & patterns
- Source is Spanish: variables and response keys use Spanish words (`usuarios`, `mensaje`, `nuevo_usuario`, etc.). Follow the existing language for consistency.
- Routes: uses `/user` (singular) for collection and item operations — when adding routes, keep this pattern.
- Data shape for users: `{ id: number, nombre: string, edad: number }` — maintain this payload shape in examples and tests.
- Error handling: there is an Express error-handling middleware registered after routes. When adding async code, use try/catch and call `next(err)` to surface errors to that middleware.

5) External dependencies and integrations
- `express` for HTTP server.
- `nodemon` as a dev dependency listed in `dependencies` (not `devDependencies`) — keep this in mind if you reorganize packages.
- No database, external APIs, or background workers present.

6) Examples (copyable)
- Start dev server (PowerShell):
```powershell
npm install
npm run dev
```
- Test endpoints (PowerShell `curl` or `Invoke-RestMethod`):
```powershell
# GET all users
curl http://localhost:3000/user

# Add a user
curl -Method POST -Body (@{ nombre='Ana'; edad=30 } | ConvertTo-Json) -ContentType 'application/json' http://localhost:3000/user
```

7) When changing architecture
- If adding persistence, move `usuarios` into a module `lib/users.js` or `services/usersService.js` and replace in-memory mutation with an async API.
- If splitting routes, create `routes/user.js` and `app.use('/user', require('./routes/user'))` to keep `index.js` as the composition root.

8) Things to watch for (common pitfalls)
- Hardcoded `PORT`: update code before suggesting environment-based commands.
- Spanish responses/keys: avoid suggesting new English-only keys unless also updating existing responses.
- `nodemon` is declared as a runtime dependency — if you reorganize deps, preserve the `dev` script behavior.

If any section is unclear or you want more examples (tests, CI, or a DB integration plan), say which area and I will expand or iterate.
