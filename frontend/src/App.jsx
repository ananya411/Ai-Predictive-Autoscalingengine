
// import {useEffect,useState} from 'react';
// function App(){
//   const[metrics,setmetrics]=useState({});
//   useEffect(()=>{
//     const interval = setInterval(async()=>{
//       const res=await fetch("http://localhost:5000/api/metrics/current");
//       const data =await res.json();
//       setmetrics(data);},2000);
//       return()=>clearInterval(interval);
//   },[]);
//   return(
//     <div>
//       <h1>AI predictive Autoscaler</h1>
//       <p>CPU:{metrics.cpu}</p>
//       <p>Memory:{metrics.memory}</p>
//       <p>Requests/Sec:{metrics.requestsPerSecond}</p>   
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import { Routes, Route } from 'react-router-dom';
// import Hero from './pages/Hero';
// import Features from './pages/features';
// import Team8 from './components/mvpblocks/team-8';
// import ContactUs1 from './components/mvpblocks/contact-us-1';
// import Pricing from './components/mvpblocks/pricing-4.jsx';
// import Footer from './components/mvpblocks/footer-standard.jsx';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';
// import AdminDashboard from './components/mvpblocks/index';

// const LandingPage = () => (
//   <>
//     <Hero />
//     <Features />
//     <Team8 />
//     <Pricing />
//     <ContactUs1 />
//     <Footer />
//   </>
// );

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/dashboard" element={<AdminDashboard />} />
//     </Routes>
//   )
// }

// export default App
// =======
// import {useEffect,useState} from 'react';
// function App(){
//   const[metrics,setmetrics]=useState({});
//   useEffect(()=>{
//     const interval = setInterval(async()=>{
//       const res=await fetch("http://localhost:5000/api/metrics/current");
//       const data =await res.json();
//       setmetrics(data);},2000);
//       return()=>clearInterval(interval);
//   },[]);
//   return(
//     <div>
//       <h1>AI predictive Autoscaler</h1>
//       <p>CPU:{metrics.cpu}</p>
//       <p>Memory:{metrics.memory}</p>
//       <p>Requests/Sec:{metrics.requestsPerSecond}</p>   
//     </div>
//   )
// }
// // updation 
// export default App;




import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Hero from './pages/Hero';
import Features from './pages/features';
import Team8 from './components/mvpblocks/team-8';
import ContactUs1 from './components/mvpblocks/contact-us-1';
import Pricing from './components/mvpblocks/pricing-4.jsx';
import Footer from './components/mvpblocks/footer-standard.jsx';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("http://localhost:5000/api/metrics/current");
      const data = await res.json();
      setMetrics(data);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>AI Predictive Autoscaler</h1>
      <p>CPU: {metrics.cpu}</p>
      <p>Memory: {metrics.memory}</p>
      <p>Requests/Sec: {metrics.requestsPerSecond}</p>
    </div>
  );
};

const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <Team8 />
    <Pricing />
    <ContactUs1 />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
