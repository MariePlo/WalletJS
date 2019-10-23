import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import App from './App.js';
import SignUpForm from './SignUpForm.js';


class SignUp extends Component
{
  render()
  {
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <SignUpForm className="App-form"/>
      <Link to={'/App'}>Home</Link>
      </header>
      </div>
      );
  }
}
 export default SignUp;