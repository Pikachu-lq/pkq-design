/*
 * @Author       : liqiao
 * @Date         : 2022-07-24 19:21:31
 * @LastEditors  : liqiao
 * @LastEditTime : 2022-07-24 22:43:11
 * @Description  : Do not edit
 * @FilePath     : /pkq-design/src/App.tsx
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App:React.FC=()=>{

  const a = '1';
  if(a==='1'){
    console.log("11");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
