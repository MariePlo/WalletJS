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

	handleChange(event)
	{
		localStorage.setItem([event.target.name], event.target.value);
		sessionStorage.removeItem("state");
		sessionStorage.setItem("state", '1');
	}

	render()
	{
		return(
			<form id="my_form">
				<label className="element-form">First Name : <input type="text" name="fname" onChange={this.handleChange} required/></label>
				<label className="element-form">Last Name : <input type="text" name="lname" onChange={this.handleChange} required/></label>
				<label className="element-form">Email Address : <input type="mail" name="mail" onChange={this.handleChange} required/></label>
				<label className="element-form">Password : <input type="password" name="password" onChange={this.handleChange} required/></label>
				<button type="submit">Sign up</button>
			</form>
		);
	}
}
export default SignUpForm;

