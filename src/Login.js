import React, { Component } from 'react';

class Login extends Component 
{

	handleChange(event)
	{
		if(localStorage.getItem([event.target.name])===event.target.value)
		{
			var i = sessionStorage.getItem("test");
			sessionStorage.removeItem("test");
			i++;
			sessionStorage.setItem("test", i);
		}

		if(sessionStorage.getItem("test")==='2')
		{
			sessionStorage.removeItem("state");
			sessionStorage.setItem("state", '1');
		}

	}


	render()
	{
		sessionStorage.setItem("test", '0');
		return(
			<form>
				<label className="element-form">Email Address : <input type="mail" name="mail" onChange={this.handleChange} required/></label>
				<label className="element-form">Password : <input type="password" name="password" onChange={this.handleChange} required/></label>
				<button type="submit">Login</button>
			</form>
		);
	}
}

export default Login;