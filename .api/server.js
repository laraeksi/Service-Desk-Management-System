// src/api-server/server.ts
import express from "express";
import * as configure from "./configure.js";
import { handler } from "./handler.js";
import { endpoints } from "./routers.js";

const server = express();
configure.serverBefore?.(server);

// Render provides PORT, and you must bind to 0.0.0.0
const HOST = "0.0.0.0";
const PORT = process.env.PORT || "3000";

const SERVER_URL = `http://${HOST}:${PORT}${API_ROUTES.BASE}`;

server.use(API_ROUTES.BASE_API, handler);
server.use(API_ROUTES.BASE, express.static(API_ROUTES.PUBLIC_DIR));

configure.serverAfter?.(server);

server.listen(Number(PORT), HOST, () => {
  console.log(`Ready at ${SERVER_URL}`);
  configure.serverListening?.(server, endpoints);
}).on("error", (error) => {
  console.error(`Error at ${SERVER_URL}`, error);
  configure.serverError?.(server, error);
});
