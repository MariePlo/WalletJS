import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import App from './App.js';



class LogOut extends Component
{   
    disconect = () =>
    {
        alert("fct disconect"); 
        sessionStorage.clear();
        window.location.reload();
    }


  

  render()
  {

    return(
      <div className="App">
      <header className="App-header">
      
        <p>{this.disconect()}</p>
      </header>
      </div>
      );
  }
}
 export default LogOut;