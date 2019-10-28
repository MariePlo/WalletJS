import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import App from './App.js';



class AccBalance extends Component
{   
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    add_balance = (value) =>
    {
      var val;
      if(localStorage.getItem("acountBalance") != "null"){
        val = localStorage.getItem("accountBalance");
      }
      else{
        val=0;
      }
      
        val = Number(value) + Number(val);
        //console.log(Number(value)+",deuxieme "+Number(val));
        localStorage.removeItem("accountBalance");
        localStorage.setItem("accountBalance",val);
    
  }

  sub_balance = (value) =>
    {
      var val;
      if(localStorage.getItem("acountBalance") != "null"){
        val = localStorage.getItem("accountBalance");
      }
      else{
        val=0;
      }
      
        val = Number(val) - Number(value);
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
	{
    this.setState({value: event.target.value});
    
  }
  
  handleSubmit() {
    this.add_balance(this.state.value);
    
  }
  handleSubmit2() {
    this.sub_balance(this.state.value);
    
  }

  render()
  {
    
    return(
     
      <div className="App">
      <header className="App-header">
      
      <p className="titre"> Account Balance </p>
      <p>{this.current_balance()}</p>
      <form id="my_form" >
				<label className="element-form">amount <input type="number" name="add_amout" onChange={this.handleChange} required/></label>
				<button onClick={this.handleSubmit.bind(this)}>Add</button>
        <button onClick={this.handleSubmit2.bind(this)}>sub</button>
			</form>
      

      </header>
      </div>
      );
  }
}
 export default AccBalance;