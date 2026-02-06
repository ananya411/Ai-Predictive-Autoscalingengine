const {generateMetrics}=require("../services/metrics.service");
async function getCurrentMetrics(req,res){
    const metrics= await generateMetrics();
    res.json(metrics);
}
module.exports={getCurrentMetrics};