import React from 'react'

export default function Timer({ hours, minutes, seconds, handleStartClick, handleStopClick, isActive}) {


    return (
        <div className='m-6 flex flex-row items-center justify-between'>
            <p className='font-semibold text-2xl p-4 text-center'>
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </p>
            <div className='p-4'>
            {/* start/stop button conditionally rendered */}
                {JSON.parse(localStorage.getItem('activeTimer')) === true ? <button className='bg-red-600 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleStopClick}>Stop</button>
                : <button className='bg-green-500 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleStartClick}>Start</button>
                }
            </div>

        </div>
    );
  }