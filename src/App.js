// import React, { useState } from 'react'
// import './App.css';

// const App = () => {
// let time = new Date().toLocaleString();

// const [currtime,setCurrtime] = useState(time);
// const UpdateTime = () =>{
//   time = new Date().toLocaleString();
//   setCurrtime(time);
// };

// //Changing Data Without any button
// setInterval(UpdateTime,1000)

//   return (
//     <>
//     <h1> {currtime} </h1>
    
//     </>
//   );

// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [splitTime, setSplitTime] = useState(date.toLocaleTimeString().split(':'));


  
  function refreshClock() {
    setDate(new Date());
  }

 
  

  useEffect(() => {
    setSplitTime(date.toLocaleTimeString().split(':'))
    setTimeout(refreshClock, 1000)
  }, [date]);
  

  return (
    <div  >

      <section id="one">
        <h3>Digital-Clock</h3>
        <div className="clock-one">{date.toLocaleTimeString()}</div>
      <br/>
        <br/>
        
      </section>
    </div>
  );
}


export default App;