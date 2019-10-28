import React, { Component } from 'react';

class Cards extends Component
{
	constructor(name, brand, number, expire, crypto)
	{
		super(name, brand, number, expire, crypto);
		this.brand=brand;
		this.number=number;
		this.expire=expire;
		this.crypto=crypto;
	}

	handleSubmit(event)
	{
		var card = [document.getElementById("name").value, document.getElementById("brand").value, document.getElementById("number").value, document.getElementById("expire").value, document.getElementById("cryptogram").value];
		localStorage.setItem(document.getElementById("name").value, card);
		alert(localStorage.getItem(document.getElementById("name").value))
		alert(card);
		var wallet = new Array();
		if(localStorage.getItem("wall") != "null")
		{
        	wallet=[localStorage.getItem("wall"), document.getElementById("name").value];
     	}
     	else
     	{
     		wallet=[document.getElementById("name").value];
     	}
		/*wallet.push(document.getElementById("name").value);
		wallet.push(document.getElementById("brand").value);
		wallet.push(document.getElementById("number").value);
		wallet.push(document.getElementById("expire").value);
		wallet.push(document.getElementById("cryptogram").value);*/
		alert(wallet);
		localStorage.removeItem("wall");
		localStorage.setItem("wall", wallet);
	}

	show_cards()
	{
		return(
			<p>{}</p>
			);	
	}

	render()
	{
		return(
		<div className="App">
      <header className="App-header">
      	<form id="my_form">
			<label className="element-form">Card Name : <input type="text" id="name" required/></label>
			<label className="element-form">Card Brand : <input type="text" id="brand" required/></label>
			<label className="element-form">Card Number : <input type="number" max="" id="number" required/></label>
			<label className="element-form">Expiration Date : <input type="month" id="expire" required/></label>
			<label className="element-form">Cryptogram : <input type="number" max="999" id="cryptogram" required/></label>
			<button type="submit" onClick={this.handleSubmit}>Add card</button>
		</form>
		<p>{this.show_cards()}</p>

      </header>
      </div>

			);
	}
}
export default Cards;