<<<<<<< HEAD
const express = require("express");
const cors = require("cors"); // for handling cross-origin data requests(different ports)
const connectDB = require("./config/db");
const scalingRoutes = require("./routes/scaling.routes");
const metricsRoutes = require("./routes/metrics.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Connect to MongoDB
connectDB();
=======
const express=require("express");
const cors=require("cors"); // for handling cross-origin data requests(different ports)
const scalingRoutes=require("./routes/scaling.routes");

const metricsRoutes=require("./routes/metrics.routes");


const app=express();
>>>>>>> e2c306382e3a9130ee83e6f7d8173456045fd3d0

app.use(cors());

app.use(express.json());


<<<<<<< HEAD
app.get("/health", (req, res) => {
        res.json({ Status: "UP" });
})                              // Because in real systems like kubernetes we need health check endpoints
app.use("/api/scaling", scalingRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/auth", authRoutes); // Mount auth routes

module.exports = app;
=======
app.get("/health",(req,res)=>{
        res.json({Status:"UP"});
})                              // Because in real systems like kubernetes we need health check endpoints
app.use("/api/scaling",scalingRoutes);
app.use("/api/metrics",metricsRoutes);
module.exports=app;

>>>>>>> e2c306382e3a9130ee83e6f7d8173456045fd3d0
