import express from "express";
import cors from "cors";
import { scrapeMetaToConfig } from "./meta";

const app = express();
app.use(cors());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/scrape", async (req, res) => {
  const url = String(req.query.url || "");
  if (!url) return res.status(400).json({ error: "Missing url" });
  try {
    const cfg = await scrapeMetaToConfig(url);
    res.json(cfg);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || "Scrape failed" });
  }
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`Server on :${PORT}`));
