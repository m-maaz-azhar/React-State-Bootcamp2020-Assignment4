import React, { useState } from 'react';
import './App.css';

function App() {
  let [isLit, setLit] = useState('Light');
  let [tempr, setTemp] = useState(72);
  return (
    <div className={`app ${isLit}`}>
      <h1>React State - Bootcamp 2020 - Assignment 4</h1>
      <br />
      <h3>Dark Mode / Light Mode</h3>
      <button onClick={() => {
        setLit('Dark');
        console.log(isLit);
      }
      }>ON</button>
      <button onClick={() => {
        setLit('Light');
        console.log(isLit);
      }
      }
      >OFF</button>
      <br />
      <hr />
      <br />
      <h3>Temperature</h3>
      <p>{`Current Temperature: ${tempr}°F`}</p>
      <button onClick={() => {
        setTemp(tempr + 1);
      }
      }>+</button>
      <button onClick={() => {
        setTemp(tempr - 1);
      }
      }
      >-</button>
    </div>
  );
}

export default App;
