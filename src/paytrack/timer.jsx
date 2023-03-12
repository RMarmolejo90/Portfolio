import React from 'react'

export default function Timer({ hours, minutes, seconds, handleTimerClick, buttonText, isActive}) {

    
    return (
        <div className='p-6 flex flex-row items-center justify-between'>
            <p className='font-semibold text-2xl p-4 text-center'>
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </p>
            <div className='p-4'>
            {/* start/stop button conditionally rendered */}
                {isActive ? <button className='bg-red-600 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleTimerClick}>{buttonText}</button>
                : <button className='bg-green-500 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleTimerClick}>{buttonText}</button>
                }
            </div>

        </div>
    );
  }