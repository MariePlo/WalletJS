import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock/Clock.js';
//import Button from './Button/Button.js';


class App extends Component
{
  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Salut cest cool</h1>
      </header>
      <Clock date={new Date()}/>
      <button>Start</button>
      <button>Stop</button>
      </div>
      );
  }
}
 export default App;