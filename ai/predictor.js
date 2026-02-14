class LinearRegression{
    constructor(){
        this.m=0;
        this.b=0;
    }
    train(data){
        const n=data.length;
        let sumX=0;                         //total of time indexes
        let sumY=0;                         //total of cpu usages
        let sumXY=0;                        //total of time index * cpu usage
        let sumXX=0;                        //total of time index squared    
        data.forEach((y,x)=>{
            sumX +=x;
            sumY +=y;
            sumXY +=(x*y);
            sumXX +=(x*x);
        });
        this.m=(n*sumXY-sumX*sumY)/(n*sumXX-sumX*sumX);
        this.b=(sumY-this.m*sumX)/n;                          
    }
    predict(x){
        return this.m*x+this.b;
    }    
}
module.exports=LinearRegression;
