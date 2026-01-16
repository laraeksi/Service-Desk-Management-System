// src/api-server/server.ts
import express from "express";
import * as configure from "./configure.js";
import path from "path";
import { fileURLToPath } from "url";
import { handler } from "./handler.js";
import { endpoints } from "./routers.js";

const API_ROUTES = {
  BASE: "/",
  BASE_API: "/api",
  PUBLIC_DIR: "dist"
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", API_ROUTES.PUBLIC_DIR);

const server = express();
configure.serverBefore?.(server);

// Render provides PORT, and you must bind to 0.0.0.0
const HOST = "0.0.0.0";
const PORT = process.env.PORT || "3000";

const SERVER_URL = `http://${HOST}:${PORT}${API_ROUTES.BASE}`;

server.use(API_ROUTES.BASE_API, handler);
server.use(API_ROUTES.BASE, express.static(publicDir));
server.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

configure.serverAfter?.(server);

server.listen(Number(PORT), HOST, () => {
  console.log(`Ready at ${SERVER_URL}`);
  configure.serverListening?.(server, endpoints);
}).on("error", (error) => {
  console.error(`Error at ${SERVER_URL}`, error);
  configure.serverError?.(server, error);
});
