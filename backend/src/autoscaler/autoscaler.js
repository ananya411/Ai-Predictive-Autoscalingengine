const {generateMetrics}=require("../services/metrics.service");
const LinearRegression=require("../../../ai/predictor");
const {evaluateScaling}=require("../services/scaling.service");

const model =new LinearRegression();
const cpuHistory=[];

function startAutoScaler(){
    setInterval(async ()=>{

        const metrics= await generateMetrics();
        cpuHistory.push(metrics.cpu);
        if(cpuHistory.length>10)cpuHistory.shift();

        let cpuToUse=metrics.cpu;
        let predictedCPU=null;
        if(cpuHistory.length>=6){
            model.train(cpuHistory);
            predictedCPU=model.predict(cpuHistory.length+1);
            cpuToUse=predictedCPU;
        }

        const scalingDecision=evaluateScaling(cpuToUse);

        console.log("==============AUTOSCALER================");
        console.log("CPU:",metrics.cpu);
        console.log("Memory:",metrics.memory);
        console.log("Requests/Sec:",metrics.requestsPerSecond);
        console.log("Scaling Action:",scalingDecision.action);
        console.log("Current Instances:",scalingDecision.currentInstances);
        console.log("=======================================");
    },5000);
}
module.exports={startAutoScaler};