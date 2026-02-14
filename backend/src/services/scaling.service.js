let currentInstances=1;
const MAX_INSTANCES=5;
const MIN_INSTANCES=1;
function evaluateScaling(cpuUsage){
    let action="NO_ACTION";
        if(cpuUsage >70 && currentInstances< MAX_INSTANCES){
        currentInstances++;
        action="SCALE UP";}
    else if(cpuUsage<30 && currentInstances>MIN_INSTANCES){
        currentInstances--;
        action="SCALE_DOWN";
    }
    return {action,currentInstances};
}
module.exports={evaluateScaling};
