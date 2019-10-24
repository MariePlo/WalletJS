import React, { Component } from 'react';
import {Button} from 'react';
import Accueil from './Accueil.js';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class Login extends Component 
{
		

	render()
	{
		return(
			<Router>

			<form onsubmit="<Router><Switch><Route path='/Accueil' component={Accueil}/></Switch></Router>">
				<label className="element-form">Email Address : <input type="mail" required/></label>
				<label className="element-form">Password : <input type="password" required/></label>
				<Link to={"/Accueil"}> <button type="submit">Login</button> </Link>
			</form>
			<Switch>
			 <Route path='/Accueil' component={Accueil}/>
			</Switch>
			</Router>
		);
	}
}

export default Login;