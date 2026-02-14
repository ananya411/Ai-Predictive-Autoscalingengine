const si= require("systeminformation");

async function generateMetrics(){
    const cpuData = await si.currentLoad();                     //returns load,cores etc.          
    const memData = await si.mem();                             //returns total,available ,used etc.
    const cpu= Math.round(cpuData.currentLoad);      

    const memory=Math.round((memData.total-memData.available)/memData.total*100);
    
    const requestsPerSecond=Math.floor(Math.random()*500);      //stimulates traffic load 
    return {
        cpu,
        memory,
        requestsPerSecond,
        timestamp:new Date()
    };
}
module.exports={generateMetrics};
