const {evaluateScaling}=require("../services/scaling.service");
function scaleSystem(req,res){
    const {cpu}=req.body;
    if(cpu===undefined){
        return res.status(400).json({error:"CPU usage is required"});

    }
    const decision=evaluateScaling(cpu);
    res.json(decision);
}
module.exports={scaleSystem};