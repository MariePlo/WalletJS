import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import App from './App.js';
import Login from './Login.js';


class SignUp extends Component
{
  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      <Link to={'/App'}>Home</Link>
      </header>
      </div>
      );
  }
}
 export default SignUp;