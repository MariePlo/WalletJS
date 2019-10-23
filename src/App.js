import React, { Component} from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp.js';


class App extends Component
{
  render()
  {
    return(
      <Router>
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome</h1>
      <Login className="App-form"/>
      <Link to={"/SignUp"}>Sign up</Link>
      <Switch>
        <Route path='/SignUp' component={SignUp}/>
        
      </Switch>
      </header>
      </div>
      </Router>
      );
  }
}
 export default App;