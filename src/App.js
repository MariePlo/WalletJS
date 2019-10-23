import React, { Component } from 'react';
import logo from './logoWat.png';
import './App.css';
import Clock from './Clock/Clock.js';
import Login from './Login.js';


class App extends Component
{
  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome !</h1>
      <Login className="App-form"/>
      </header>
      </div>
      );
  }
}
 export default App;