import React from 'react'
import './App.css'
import Tracker from './paytrack/tracker.jsx'

function App() {

  return (
    <div className="bg-slate-900 flex-auto justify-center items-center text-slate-300">
      <h1 className='p-4 bg-slate-800 text-slate-100 font-thin tracking-wide text-2xl text-right flex-auto justify-center items-center'>Rich Marmolejo</h1>
      <Tracker />
      <footer className='min-w-full p-12 bg-zinc-900 text-center'>
        <a href="mailto:richardmarmolejo@gmail.com">richardmarmolejo@gmail.com</a>
      </footer>
    </div>
  )
}

export default App
