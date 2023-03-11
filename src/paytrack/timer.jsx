import React from 'react'

export default function Timer({ hours, minutes, seconds, handleTimerClick, buttonText, isActive}) {

    
    return (
      <div>
        <p>
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
        {/* start/stop button conditionally rendered */}
        {isActive ? <button className='bg-red-500 py-0.5 px-4 border-slate-600 rounded-md text-white' onClick={handleTimerClick}>{buttonText}</button>
        : <button className='bg-green-500 py-0.5 px-4 border-slate-600 rounded-md text-white' onClick={handleTimerClick}>{buttonText}</button>
        }

      </div>
    );
  }