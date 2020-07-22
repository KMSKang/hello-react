/**
 * 과장님꺼
 */
import React, { useState, useEffect } from 'react';

/**
 * 원래 있던거
 */
// import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  /**
   * 과장님꺼
   */
  const [value, setValue] = useState(0);
  const [isEnabled, setEnabled] = useState(false);

  /**
   * 과장님꺼
   */
  // onchange = () => {
  //   setValue(value + 1);
  // }

  /**
   * 내꺼
   */
  var valueCurrent = value;

  function valueUp() {
    setValue(value + 1);
    ++valueCurrent;
  }

  function valueDown() {
    setValue(value - 1);
    --valueCurrent;
    if(valueCurrent == 0) {
      setEnabled(true);
    }
  }

  /**
   * 과장님꺼
   */
  return (
      <div className="App">
        <div>
          {value}
        </div>
        <button onClick={valueUp}>+</button>
        <button onClick={valueDown} disabled={isEnabled}>-</button>
      </div>
  )

  /**
   * 원래 있던거
   */
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
