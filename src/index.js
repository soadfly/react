import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./todos";
//import App from "./ClassApp";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <App who= "Alberto"/>,
  // </React.StrictMode>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

