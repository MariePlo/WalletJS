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


		//this.state = {fname : '', lname :'', mail : '', password : ''};
	}



	handleChange(event)
	{
		localStorage.setItem(event.target.name, event.target.value);
		console.log(event.target.name);
		sessionStorage.removeItem("state");
		sessionStorage.setItem("state", '1');
	}

	handleSubmit(event) {
		var fnameStorage = "fname"+localStorage.getItem("mail");
		var lnameStorage = "lname"+localStorage.getItem("mail");
		var mailStorage = "mail"+localStorage.getItem("mail");
		var passwordStorage = "password"+localStorage.getItem("mail");

		console.log("fnameStorage" +":" +fnameStorage);
		console.log(lnameStorage);
		

		localStorage.setItem(fnameStorage,localStorage.getItem("fname"));
		localStorage.setItem(lnameStorage,localStorage.getItem("lname"));
		localStorage.setItem(mailStorage,localStorage.getItem("mail"));
		localStorage.setItem(passwordStorage,localStorage.getItem("password"));
		sessionStorage.removeItem("state");
		sessionStorage.setItem("state", '1');
	  }

	render()
	{
		return(
			<form id="my_form" onSubmit={this.handleSubmit}>
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

