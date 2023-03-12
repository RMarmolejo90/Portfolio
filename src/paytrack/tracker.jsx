import React, { useState, useEffect } from 'react'
import Timer from './timer.jsx';
import Net from './net.jsx'
import Clear from './clear.jsx'


export default function 
() {
  // core logic - sets state for the form and time - imported from Home in Vite project
    const [isActive, setIsActive] = useState(
        localStorage.getItem('activeTimer') ? JSON.parse(localStorage.getItem('activeTimer')) : false
    );
    const [buttonText, setButtonText] = useState(
        isActive ? "Stop" : "Start"
    );
    const [elapsedTime, setElapsedTime] = useState(0);
    
    const [startTime, setStartTime] = useState(null);

    const [displayNet, setDisplayNet] = useState(0.00);

    const storedNetPay = JSON.parse(localStorage.getItem('netPay'));

    // updates the displayNet state with netpay from local storage
    // this is used to upadate the displayed net pay on the page
    useEffect (() => {
        setDisplayNet(storedNetPay);
    }, [storedNetPay]);
    
    // timer function
    
    
    useEffect(() => {
        const storedTime = localStorage.getItem('startTime');
        const interval = setInterval(() => {
        if (storedTime) {
            const elapsedTimeInSeconds = Math.floor((new Date().getTime() - storedTime) / 1000);
            setElapsedTime(elapsedTimeInSeconds);
            localStorage.setItem('timeElapsed', elapsedTimeInSeconds);
            console.log("elapsed time : ", + localStorage.getItem('timeElapsed'));
        }
        }, 1000);
        return () => clearInterval(interval);
    }, [isActive]);

    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    // handles the form         
    const [inputRate, setInputRate] = useState('');
    const [submittedRate, setSubmittedRate] = useState (
        isActive ? localStorage.getItem('activeSubmittedRate') : 0 
    );
    const [grossPay, setGrossPay] = useState(0);
    const payPerSecond = (submittedRate / 3600);

    const handleRate = (event) => {      
        setInputRate(event.target.value)
    }
    
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(`hourly rate is ${inputRate}`);
     setSubmittedRate(inputRate);
     setInputRate("");
     localStorage.setItem('activeSubmittedRate', inputRate);
     console.log('per second = ' + payPerSecond , 'gross = ' + grossPay);
   }

   // handles retrieving data from local storage on page reload
   // right now it only retrieves the timers isActive state
   
    useEffect(() => {
        setIsActive(localStorage.getItem('activeTimer'));
        // if (localStorage.getItem('startButton')){
        //     setButtonText(localStorage.getItem('startButton'));
        // }
        if (isActive === true){
            setButtonText(localStorage.getItem('startButton'));
            setSubmittedRate(localStorage.getItem('activeSubmittedRate'));
        }
        
    }, []);
  
  
    // handles timer button
    // Start or stop the timer

    const handleTimerClick = () => {
        if (isActive) {
            setIsActive(false);
            setButtonText('Start');
            setElapsedTime(0);
            localStorage.removeItem('startTime');
            localStorage.setItem('activeTimer', false);
            localStorage.removeItem('startButton');
            console.log("timer is not active");
        } else {
            setIsActive(true);
            setButtonText('Stop');
            setStartTime(new Date().getTime());
            localStorage.setItem('startTime', new Date().getTime());
            localStorage.setItem('activeTimer', true);
            localStorage.setItem('startButton', "Stop");
            console.log("timer-active");
            console.log("startTime : ", startTime);
        }
    };

     // this calculates the hourly pay into seconds
  

    useEffect(() => {
        let interval = null;
        if (isActive){
            interval = setInterval(() => {
                setGrossPay(localStorage.getItem('timeElapsed') * payPerSecond);
            }, 1000);
            return () => clearInterval(interval);
            }
    }, [submittedRate, isActive]);
    // end pay calculation

    const placeholderText = "Pay Rate : " + submittedRate;

    return (
        <div className='p-6'>
            <h1 className='text-5xl font-thin pb-8 text-center text-blue-400 border-b-2 border-orange-500 '>Pay Tracking App</h1>
            <div className='flex flex-wrap flex-row-reverse flex-auto justify-around items-center'>
                <Timer
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    handleTimerClick={handleTimerClick}
                    buttonText={buttonText}
                    isActive = { isActive }
                />
                <h2 className='text-2xl font-semibold'>
                    Gross Pay: ${ grossPay.toFixed(2) }
                </h2>
                <h2 className='text-2xl font-semibold'>
                    Net Pay: ${ displayNet.toFixed(2) }
                </h2>
                
            </div> 
            <div className='flex flex-auto flex-col flex-wrap justify-center items-center'> 
                <div className='flex flex-auto flex-row flex-wrap justify-center items-center'>
                    <h3 className='p-2'>
                        Hourly Rate: ${ submittedRate }
                    </h3>
                    <form className='outline-slate-600 p-6' onSubmit={ handleSubmit }>
                        <input 
                        className='border-none border-red-600 bg-slate-50 rounded-sm py-1.5 px-3 mr-4'
                        placeholder = {placeholderText}
                        min = "0"
                        type="number"
                        step="0.01" 
                        value={ inputRate } 
                        onChange={ handleRate } 
                        />
                        <button className='bg-blue-500 border-slate-500 rounded-md text-slate-100 font-semibold p-1.5' type="submit">Submit</button>
                    </form>
                </div>
                <Net 
                    grossPay = {grossPay}
                />
                <Clear />
            </div>  
        </div>
    )
}
