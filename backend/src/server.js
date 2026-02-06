const app=require("./app");
const {startAutoScaler}=require("./autoscaler/autoscaler.js");
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    startAutoScaler();
})