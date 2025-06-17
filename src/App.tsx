import { useState } from 'react'
import './App.css'

function App() {

  function RefreshIcon() {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        width="24" 
        height="24" 
        fill="currentColor"
      >
      <path d="M500.33 93.73c12.4-12.4 12.4-32.51 0-44.91s-32.51-12.4-44.91 0l-67.03 67.03c-41.37-33.52-93.78-51.76-147.99-51.76-64.91 0-125.89 25.27-171.53 70.9S0 223.08 0 288c0 64.91 25.27 125.89 70.9 171.53S223.08 512 288 512s125.89-25.27 171.53-70.9c45.63-45.63 70.9-106.61 70.9-171.53 0-11.42-.69-22.72-2.04-33.86-2.21-18.11-18.6-30.97-36.7-28.75s-30.97 18.6-28.75 36.7c.97 7.96 1.46 16.02 1.46 25.91 0 45.9-17.87 89.06-50.31 121.5S333.9 448 288 448s-89.06-17.87-121.5-50.31S116.18 333.9 116.18 288s17.87-89.06 50.31-121.5S242.1 116.18 288 116.18c32.62 0 63.99 10.33 89.87 29.38l-62.54 62.54c-12.4 12.4-12.4 32.51 0 44.91s32.51 12.4 44.91 0l140.09-140.09z"/>
      </svg>
    );
  }


  return (
    <div id="app">
      <h1 id="title">25 + 5 Clock</h1>
      
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
        <button id="reset"><RefreshIcon/></button>
      </div>
    </div>

)
}

export default App
//🔁