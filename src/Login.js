import React, { Component } from 'react';

class Login extends Component 
{

	validate = (mail, password) =>
	{
		
	}


	render()
	{
		return(
			<form>
				<label className="element-form">Email Address : <input type="mail" id="in_mail" required/></label>
				<label className="element-form">Password : <input type="password" id="in_password" required/></label>
				<button type="submit">Login</button>
			</form>
		);
	}
}

export default Login;