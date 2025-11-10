// api/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// --- In-memory pilot counter ---
let pilotsOnline = 0;

// --- API routes ---
app.get("/api/pilots", (req, res) => {
  return res.status(200).json({ pilotsOnline });
});

app.post("/api/connect", (req, res) => {
  pilotsOnline++;
  return res.status(200).json({
    message: "Pilot connected",
    pilotsOnline
  });
});

app.post("/api/disconnect", (req, res) => {
  if (pilotsOnline > 0) pilotsOnline--;
  return res.status(200).json({
    message: "Pilot disconnected",
    pilotsOnline
  });
});

// --- Export handler for Vercel ---
export default app;
