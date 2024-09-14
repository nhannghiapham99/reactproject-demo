import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Import global styles
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals'; // Optional: for measuring performance

// Render the App component into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
