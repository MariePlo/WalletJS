import React, { Component} from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import Accueil from './Accueil.js';
import Home from './Home.js';

class user extends Component{
	constructor(logState){
super(logState);
this.logState = logState;
		}
	
}


var LogedIn = true;


const utilisateur = new user(true);

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
      
      
      
      <Switch>

        <Route path='/SignUpForm' component={SignUpForm}/>
        <Route path='/Login' component={Login}/>

        if (LogedIn != 'true'){
        	<Route path='/' component={Home}/>
        }
        if (LogedIn == 'true'){
        	<Route path='/' component={Accueil}/>
        }
        
        

        
      </Switch>
      </header>
      </div>
      </Router>
      );
  }
}
 export default App;