import React from 'react'
import Total from './total.jsx';
import Timer from './timer.jsx';
import Current from './current.jsx';


export default function 
() {
  // core logic - sets state for the form and time
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

  return (
    <div>
        <h1>Pay Tracking App</h1>
        <Total />
        <Timer />
        <Current />
    </div>
  )
}
