import React, { Component } from 'react';
import {Button} from 'react';
import Accueil from './Accueil.js';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class Login extends Component 
{
		

	render()
	{
		function onsub()
	{
		<Router>
		<Switch>

        <Route path='/Accueil' component={Accueil}/>
        
        </Switch>
		</Router>
	}

		return(

			<form onsubmit="return onsub(this);">
				<label className="element-form">Email Address : <input type="mail" required/></label>
				<label className="element-form">Password : <input type="password" required/></label>
				<Link to={"/Accueil"}> <button type="submit">Login</button> </Link>
			</form>
		);
	}
}

export default Login;