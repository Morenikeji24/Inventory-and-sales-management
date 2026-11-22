import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the INV API" });
});

app.use((req, res) => res.status(404).json({ error: "Route not found" }));

export default app;
