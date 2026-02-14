const express = require("express");
const cors = require("cors"); // for handling cross-origin data requests(different ports)
const connectDB = require("./config/db");
const scalingRoutes = require("./routes/scaling.routes");
const metricsRoutes = require("./routes/metrics.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());

app.use(express.json());


app.get("/health", (req, res) => {
        res.json({ Status: "UP" });
})                              // Because in real systems like kubernetes we need health check endpoints
app.use("/api/scaling", scalingRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/auth", authRoutes); // Mount auth routes

module.exports = app;
