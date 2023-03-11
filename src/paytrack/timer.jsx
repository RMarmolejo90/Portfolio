import React from 'react'

export default function Timer({ hours, minutes, seconds, handleTimerClick, buttonText, isActive}) {

    function buttonColor(color) {
        const colorOptions = {
            red: "bg-red-500",
            green: "bg-green-500"
        };
    }

    return (
      <div>
        <p>
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
        <button className="{{ isActive ? 'bg-red-500' : 'bg-green-500'}}" onClick={handleTimerClick}>{buttonText}</button>
      </div>
    );
  }