import React, { Component} from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';


class App extends Component
{
  render()
  {
    return(
      <Router>
      <nav className="AppNav">
      
      	<div className="SignupBox"><Link to={"/SignUpForm"}>Sign up</Link></div>
      	<div className="LoginBox"><Link to={"/Login"}>Login</Link></div>
      
      </nav>
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      
      
      <Switch>
        <Route path='/SignUpForm' component={SignUpForm}/>
        <Route path='/Login' component={Login}/>
        
      </Switch>
      </header>
      </div>
      </Router>
      );
  }
}
 export default App;