/*
 * @Author       : liqiao
 * @Date         : 2022-07-24 19:21:31
 * @LastEditors  : liqiao
 * @LastEditTime : 2022-07-26 13:52:37
 * @Description  : Do not edit
 * @FilePath     : /pkq-design/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
