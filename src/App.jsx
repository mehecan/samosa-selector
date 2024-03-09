import './App.css';
import { useState } from 'react';

const App = () => {
  const[count, setCount] = useState(0);
  const[multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);
  return(
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className='samosa' src='https://imgs.search.brave.com/49wq8l9iBJAUtoVNMVKqQsqpy2uLtLDShef_m1Msmzg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQzLzg0Lzkx/LzM2MF9GXzQzODQ5/MTcwX3E0RUY3WGVS/YlBlN3M2NDBjRDBk/Qjg3aDJoTGRmZzVM/LmpwZw' onClick={updateCount}/>
      </div>
      <div className="container">
          <div className="upgrade">
            <h3>Double Stuffed 👯‍♀️</h3>
            <p>2x per click</p>
            <button>10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉</h3>
            <p>5x per click</p>
            <button>100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button>1000 samosas</button>
          </div>
      </div>
    </div>
  )
}
export default App