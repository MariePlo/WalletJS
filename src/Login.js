import React, { Component } from 'react';

class Login extends Component 
{

	handleChange(event)
	{
		localStorage.setItem(event.target.name, event.target.value);
		console.log(event.target.name + "," + event.target.value);

	}

	handleSubmit(event)
	{
		var loginMail = "mail"+ localStorage.getItem("mail");
		var loginPassword = "password"+ localStorage.getItem("mail");
		var LocalMail =
		console.log("loginMail : " +loginMail);
		console.log("local mail : "+ localStorage.getItem("mail"))
		
		if( localStorage.getItem(loginMail)===localStorage.getItem("mail"))
		{
			
			if (localStorage.getItem(loginPassword)===localStorage.getItem("password"))
			{
				sessionStorage.removeItem("state");
			sessionStorage.setItem("state", '1');
			}
		}
		

	
	}
	render()
	{
		sessionStorage.setItem("test", '0');
		return(
			<form onSubmit={this.handleSubmit}>
				<label className="element-form">Email Address : <input type="mail" name="mail" onChange={this.handleChange} required/></label>
				<label className="element-form">Password : <input type="password" name="password" onChange={this.handleChange} required/></label>
				<button type="submit">Login</button>
			</form>
		);
	}
}

export default Login;