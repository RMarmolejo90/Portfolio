import React from 'react'

export default function Timer({hours, minute, second, isActive,
    handleStartTimer, handleStopTimer, buttonText}) {
  
  
    return (
      <div>
        <p>{hours}:{minute}:{second}</p>
        <button onClick={isActive ? handleStopTimer : handleStartTimer}>{buttonText}</button>
      </div>
    )
  }