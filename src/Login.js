import React, { Component } from 'react';
import {Button} from 'react';
import Accueil from './Accueil.js';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class Login extends Component 
{
		

	render()
	{
		return(
			<form>
				<label className="element-form">Email Address : <input type="mail" required/></label>
				<label className="element-form">Password : <input type="password" required/></label>
				<button type="submit">Login</button>
			</form>
		);
	}
}

export default Login;