import React, { Component } from 'react';

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

	function ok = () =>
	{
		document.getElementById('button').addEventListener('click', saving());
	}

	function saving = () =>
	{
		console.log("hello");
		var fname = document.getElementById('in_fname');
		var lname = document.getElementById('in_lname');
		var mail = document.getElementById('mail');
		var password = document.getElementById('password');
		var user = new SignUpForm(fname, lname, mail, password);
		var i = localStorage + 1;
		localStorage.setItem(i, JSON.stringify(user));
		sessionStorage.removeItem("state");
		sessionStorage.setItem("state", '1');
	}

	render()
	{
		console.log("yo");
		return(
			<form>
				<label className="element-form">First Name : <input id='in_fname' type="text" required/></label>
				<label className="element-form">Last Name : <input id='in_lname' type="text" required/></label>
				<label className="element-form">Email Address : <input id='in_mail' type="mail" required/></label>
				<label className="element-form">Password : <input id='in_password' type="password" required/></label>
				<button type="submit" onClick={ok()}>Sign up</button>
			</form>
		);
	}
}
export default SignUpForm;

