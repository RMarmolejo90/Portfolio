import React, { useState } from 'react'
import './App.css'
import Tracker from './paytrack/tracker.jsx'

function App() {

  return (
    <div className="bg-neutral-900 flex-auto justify-center items-center text-slate-400">
      <div className='flex flex-auto justify-around items-center p-2 bg-zinc-700 text-slate-400 '>
        <h1 className='tracking-wide text-large'>Rich Marmolejo</h1>
      </div>
      <Tracker />
      <footer className='min-w-full p-12 bg-zinc-900 text-center'>
        <p>Thanks for trying my pay tracking app. You can direct any questions or feedback to my email.</p>
        <a href="mailto:richardmarmolejo@gmail.com">richardmarmolejo@gmail.com</a>
        <p>This is the only beta version of this app, and is still under development. Stay tuned for some major updates.</p>
      </footer>
    </div>
  )
}

export default App
