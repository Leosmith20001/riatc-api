import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let pilotsOnline = 0;

app.get("/pilots", (req, res) => {
  res.json({ pilotsOnline });
});

app.post("/connect", (req, res) => {
  pilotsOnline++;
  res.json({ message: "Pilot connected", pilotsOnline });
});

app.post("/disconnect", (req, res) => {
  if (pilotsOnline > 0) pilotsOnline--;
  res.json({ message: "Pilot disconnected", pilotsOnline });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`RIATC API running on port ${PORT}`));
