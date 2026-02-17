const express = require("express");
const cors = require("cors"); // for handling cross-origin data requests (different ports)
const connectDB = require("./config/db");
const scalingRoutes = require("./routes/scaling.routes");
const metricsRoutes = require("./routes/metrics.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Health check endpoint (useful for Kubernetes or monitoring systems)
app.get("/health", (req, res) => {
  res.json({ Status: "UP" });
});

app.use("/api/scaling", scalingRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;









