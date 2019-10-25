import React, { Component } from 'react';
import {Button} from 'react';
import Accueil from './Accueil.js'

class SignUpForm extends Component 
{

	constructor(f_name, l_name, mail, password)
	{
		super(f_name, l_name, mail, password);
		this.f_name=f_name;
		this.l_name=l_name;
		this.mail=mail;
		this.password=password;
	}

	saving = (fname, lname, mail, password) =>
	{
		alert("allo");
		const user = new SignUpForm(fname, lname, mail, password);
		localStorage.setItem("user", JSON.stringify(user));
		sessionStorage.removeItem("state");
		sessionStorage.setItem("state", '1');
	}


	render()
	{
		return(
			<form onSubmit={this.saving('m', 'p', '@', 'r')}>
				<label className="element-form">First Name : <input type="text" id="in_fname" required/></label>
				<label className="element-form">Last Name : <input type="text" id="in_lname" required/></label>
				<label className="element-form">Email Address : <input type="mail" id="in_mail" required/></label>
				<label className="element-form">Password : <input type="password" id="in_password" required/></label>
				<button type="submit">Sign up</button>
			</form>
		);
	}
}

export default SignUpForm;