import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(cors());
app.use(express.json());

let pilotsOnline = 0;

app.get("/api/pilots", (req, res) => {
  res.status(200).json({ pilotsOnline });
});

app.post("/api/connect", (req, res) => {
  pilotsOnline++;
  res.status(200).json({ message: "Pilot connected", pilotsOnline });
});

app.post("/api/disconnect", (req, res) => {
  if (pilotsOnline > 0) pilotsOnline--;
  res.status(200).json({ message: "Pilot disconnected", pilotsOnline });
});

// This line is crucial for Vercel
export default serverless(app);
