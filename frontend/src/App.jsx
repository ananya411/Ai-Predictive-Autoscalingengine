import {useEffect,useState} from 'react';
function App(){
  const[metrics,setmetrics]=useState({});
  useEffect(()=>{
    const interval = setInterval(async()=>{
      const res=await fetch("http://localhost:5000/api/metrics/current");
      const data =await res.json();
      setmetrics(data);},2000);
      return()=>clearInterval(interval);
  },[]);
  return(
    <div>
      <h1>AI predictive Autoscaler</h1>
      <p>CPU:{metrics.cpu}</p>
      <p>Memory:{metrics.memory}</p>
      <p>Requests/Sec:{metrics.requestsPerSecond}</p>   
    </div>
  )
}
// updation 
export default App;