import { useState } from 'react'
import './App.css'
import Tracker from './paytrack/tracker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Rich Marmolejo</h1>
      <Tracker />
    </div>
  )
}

export default App
