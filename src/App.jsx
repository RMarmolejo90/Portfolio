import React from 'react'
import './App.css'
import Tracker from './paytrack/tracker.jsx'

function App() {

  return (
    <div className="bg-blue-600 flex-auto justify-center items-center">
      <h1 className='p-6 bg-slate-800 text-slate-200 font-thin text-xl text-right flex-auto justify-center items-center'>Rich Marmolejo</h1>
      <Tracker />
    </div>
  )
}

export default App
