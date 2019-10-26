import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import App from './App.js';



class AccBalance extends Component
{   
    add_balance = (value) =>
    {
      var val;
      if(localStorage.getItem("acountBalance") != "null"){
        val = localStorage.getItem("accountBalance");
      }
      else{
        val=0;
      }
      alert(value+",premier "+val);
        val = Number(value) + Number(val);
        //console.log(Number(value)+",deuxieme "+Number(val));
        localStorage.removeItem("accountBalance");
        localStorage.setItem("accountBalance",val);
    
  }


  current_balance = () =>
  {
    return(
      <p>your current balance is {localStorage.getItem("accountBalance")}</p>
    );
  }

  handleChange = (event) =>
	{https://codepen.io/gaearon/pen/VmmPgp?editors=0010
    this.add_balance(event.target.value);
    
	}

  render()
  {
    
    return(
     
      <div className="App">
      <header className="App-header">
      
      <p className="titre"> Account Balance </p>
      <p>{this.current_balance()}</p>
      <form id="my_form">
				<label className="element-form">amount <input type="number" name="add_amout" onChange={this.handleChange} required/></label>
				<button type="submit">Add</button>
			</form>

      </header>
      </div>
      );
  }
}
 export default AccBalance;