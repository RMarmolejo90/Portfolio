import React from 'react'

export default function Timer({ hours, minutes, seconds, handleTimerClick, buttonText }) {
    return (
      <div>
        <p>
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
        <button onClick={handleTimerClick}>{buttonText}</button>
      </div>
    );
  }