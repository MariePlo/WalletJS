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
		
		var rename = localStorage.getItem("mail") + document.getElementById("name").value;
		
		localStorage.removeItem(rename);
		localStorage.setItem(rename,card);
		

		var current_wallet = new Array();
		var re = "card" + localStorage.getItem("mail");
		
		current_wallet.push(localStorage.getItem(re));
		current_wallet.push(document.getElementById("name").value);
		localStorage.setItem(re, current_wallet);
		alert("Your card has been added !");
		alert("Unfortunately we could not manage to display the cards. We listed them in an alert.");
		
	}

	get_cards()
	{
		var re = "card" + localStorage.getItem("mail");
		var tab_card = localStorage.getItem(re);
		
		if(tab_card != null)
		{
			var tab_split = tab_card.split(",");
			
			for(var i=1; i<tab_split.length; i++)
			{
				var name = localStorage.getItem("mail") + tab_split[i];
				var carte=localStorage.getItem(name);
				
				this.show_card(carte);
				alert("card number " + i + ": " + carte);
			}

		}
	}

	show_card(carte)
	{
		
		return(
			<header className="App-header">
			<p>{carte}</p>
			</header>
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

		<p>{this.get_cards()}</p>
      </header>
      </div>

			);
	}
}
export default Cards;