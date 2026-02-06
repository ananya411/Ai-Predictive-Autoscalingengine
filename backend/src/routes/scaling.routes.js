const express=require("express");
const router=express.Router();
const {scaleSystem}=require("../controllers/scaling.controllers");
router.post("/evaluate",scaleSystem);
module.exports=router;

