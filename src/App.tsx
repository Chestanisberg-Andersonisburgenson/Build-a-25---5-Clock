import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id="app">
      <h1>25 + 5 Clock</h1>
      
      <div id="length-controls">
        <div id="break-controls">
          <p id="break-label">Break Length</p>
          <div className="arrow-controls">
            <button id="break-decrement">⬇</button>
            <span id="break-length">5</span>
            <button id="break-increment">⬆</button>
          </div>
        </div>

        <div id="session-controls">
          <p id="session-label">Session Length</p>
          <div className="arrow-controls">
            <button id="session-decrement">⬇</button>
            <span id="session-length">25</span>
            <button id="session-increment">⬆</button>
          </div>
        </div>          
      </div>

        <div id="time-box">
          <p id="timer-label">Session</p>
          <p id="time-left">25:00</p>
        </div>        

      <div id="controls">
        <button id="start_stop">⏯</button>        
        <button id="reset">🔁</button>
      </div>
    </div>

)
}

export default App
