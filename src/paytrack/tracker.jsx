import React, { useState, useEffect } from 'react'
import Timer from './timer.jsx';
import Net from './net.jsx'
import Clear from './clear.jsx'


export default function 
() {
  // core logic - sets state for the form and time - imported from Home in Vite project
  const [isActive, setIsActive] = useState(false); 
  const [seconds, setSeconds] = useState(0);
  const hours = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = Number(seconds % 60);
  const [buttonText, setButtonText] = useState("Start");

  useEffect(() => {
      let interval = null;
      if (isActive){
      interval = setInterval(() => {
          setSeconds(prevseconds => prevseconds + 1);
          console.log('home seconds ' + seconds);
      }, 1000);
      return () => clearInterval(interval);
      }
  }, [isActive]);

   // handles the form         
   const [inputRate, setInputRate] = useState('');
   const [submittedRate, setSubmittedRate] = useState (0);
   const [grossPay, setGrossPay] = useState(0);
   const payPerSecond = (submittedRate / 3600);
   //const isActive = props.isActive;
   const handleRate = (event) => {      
     setInputRate(event.target.value)
   }
   
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(`hourly rate is ${inputRate}`);
     setSubmittedRate(inputRate);
     setInputRate("");
     console.log('per second = ' + payPerSecond , 'gross = ' + grossPay);
   }
  
  
  // handles timer button
  const handleStartTimer = (event) => {
      console.log('clicked-start');
      setIsActive(true);
      setButtonText("Stop")
  }
  
  const handleStopTimer = (event) => {
      setIsActive(false);
      setButtonText("Start");
      console.log('clicked stop');
  };

  // this calculates the hourly pay into seconds
    

  useEffect(() => {
    let interval = null;
    if (isActive){
      interval = setInterval(() => {
        setGrossPay((prevgrossPay => prevgrossPay + payPerSecond))
        console.log('pay increasing : ' + grossPay +" isActive = " + isActive);
      }, 1000);
    return () => clearInterval(interval);
    }
  }, [submittedRate, isActive]);
// end pay calculation


  return (
    <div>
        <h1>Pay Tracking App</h1>
        <Timer 
            isActive={isActive}
            handleStartTimer={handleStartTimer}
            handleStopTimer={handleStopTimer}
            hours={hours}
            minute={minute}
            second={second}
            buttonText={buttonText}
        />
        <h3>
            Hourly Rate: { submittedRate }
        </h3>
        <h2>
            Todays Gross Pay: { grossPay.toFixed(3) }
        </h2>
        
        <form onSubmit={ handleSubmit }>
            <input 
            placeholder="Hourly Rate"
            min = "0"
            type="number" 
            value={ inputRate } 
            onChange={ handleRate } 
            />
            <button type="submit">Submit</button>
        </form>
        <Net 
            grossPay = {grossPay}
        />
        <Clear />
    </div>
  )
}
