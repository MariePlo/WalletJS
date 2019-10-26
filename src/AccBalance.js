import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import App from './App.js';



class AccBalance extends Component
{   
    add_balance = (value) =>
    {
      var val;
        val = sessionStorage.getItem("accountBalance");
        val += value;
        sessionStorage.setItem("accountBalance",val);
    }


  current_balance = () =>
  {
    sessionStorage.setItem("accountBalance","120");
    return(
      <p>your current balnce is {sessionStorage.getItem("accountBalance")}</p>
    );
  }

  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      
      <p className="titre"> Account Balance </p>
      <p>{this.current_balance()}</p>
        <input type="number" name="balChange" ></input>

      </header>
      </div>
      );
  }
}
 export default AccBalance;