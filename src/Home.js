import React, { Component } from 'react';
import logo from './logoWat.png';
import './App.css';


class Home extends Component
{
  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p className="titre"> Watermelon </p>
      </header>
      </div>
      );
  }
}
 export default Home;