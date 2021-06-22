import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Rendering Is ReactDOM Render (Docs : MC 3)

//StateLifecycle

function tick(){
ReactDOM.render(
  <React.StrictMode>
    1. Hello World
    <h1>Hello, world!</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);}

setInterval(tick, 1000); //StateLifecycle

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
