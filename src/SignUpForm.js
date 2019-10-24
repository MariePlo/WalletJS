import React, { Component } from 'react';
import {Button} from 'react';
import Accueil from './Accueil.js'

class SignUpForm extends Component 
{
	render()
	{
		return(
			<form>
				<label className="element-form">First Name : <input type="text" required/></label>
				<label className="element-form">Last Name : <input type="text" required/></label>
				<label className="element-form">Email Address : <input type="mail" required/></label>
				<label className="element-form">Password : <input type="password" required/></label>
				<button type="submit" formaction="Accueil.js">Login</button>
			</form>
		);
	}
}

export default SignUpForm;