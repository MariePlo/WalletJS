import React, { Component } from 'react';

class Cards extends Component
{
	constructor(name, brand, number, expire, crypto)
	{
		super(brand, number, expire, crypto);
		this.brand=brand;
		this.number=number;
		this.expire=expire;
		this.crypto=crypto;
	}

	handleChange(event)
	{

	}

	render()
	{
		return(
		<div className="App">
      <header className="App-header">
      	<form id="my_form">
			<label className="element-form">Card Name : <input type="text" name="name" required/></label>
			<label className="element-form">Card Brand : <input type="text" name="brand" required/></label>
			<label className="element-form">Card Number : <input type="number" name="number" required/></label>
			<label className="element-form">Expiration Date : <input type="month" name="expire" required/></label>
			<label className="element-form">Password : <input type="number" max="999" name="cryptogram" required/></label>
			<button type="submit">Sign up</button>
		</form>


      </header>
      </div>

			);
	}
}
export default Cards;