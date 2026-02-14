const express=require("express");
const router=express.Router();
const {getCurrentMetrics}=require("../controllers/metrics.controller");
router.get("/current",getCurrentMetrics);
module.exports=router;
