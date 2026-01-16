import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as analyze from "./api/analyze";
import * as data from "./api/data";
import * as issues from "./api/issues";

const app = express();
app.use(express.json());

app.use("/api/analyze", analyze.default);
app.use("/api/data", data.default);
app.use("/api/issues", issues.default);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "dist");
app.use(express.static(publicDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});
