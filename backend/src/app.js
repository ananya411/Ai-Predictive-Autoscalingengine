const express=require("express");
const cors=require("cors"); // for handling cross-origin data requests(different ports)
const scalingRoutes=require("./routes/scaling.routes");

const metricsRoutes=require("./routes/metrics.routes");


const app=express();

app.use(cors());

app.use(express.json());


app.get("/health",(req,res)=>{
        res.json({Status:"UP"});
})                              // Because in real systems like kubernetes we need health check endpoints
app.use("/api/scaling",scalingRoutes);
app.use("/api/metrics",metricsRoutes);
module.exports=app;

