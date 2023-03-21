import React, { useState } from 'react'
import './App.css'
import Tracker from './paytrack/tracker.jsx'
import Hero from './portfolio/hero.jsx'

function App() {

  return (
    <div className="bg-neutral-900 flex-auto justify-center items-center text-slate-400 font-lato leading-6">
      
      <Hero />
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
