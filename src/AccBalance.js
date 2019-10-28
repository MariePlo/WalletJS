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

    update_balance(){
      var val = 0;
      var currentAccountBalance = "acountBalance"+sessionStorage.getItem("mail");
      if(localStorage.getItem(currentAccountBalance) ==! "NULL"){
        
        val = Number(localStorage.getItem(currentAccountBalance)) + 0;
      }
      else{
        
        val=0;
      }
      localStorage.setItem(currentAccountBalance,val);
    }

    add_balance = (value) =>
    {
      var currentAccountBalance = "acountBalance"+localStorage.getItem("mail");
      var val;
      if(localStorage.getItem(currentAccountBalance) != "null"){
        val = localStorage.getItem(currentAccountBalance);
      }
      else{
        val=0;
      }
      
        val = Number(value) + Number(val);
        //console.log(Number(value)+",deuxieme "+Number(val));
        localStorage.removeItem(currentAccountBalance);
        localStorage.setItem(currentAccountBalance,val);
    
  }

  sub_balance = (value) =>
    {
      var val;
      var currentAccountBalance = "acountBalance"+localStorage.getItem("mail");
      if(localStorage.getItem(currentAccountBalance) != "null"){
        val = localStorage.getItem(currentAccountBalance);
      }
      else{
        val=0;
      }
      
        val = Number(val) - Number(value);
        //console.log(Number(value)+",deuxieme "+Number(val));
        localStorage.removeItem(currentAccountBalance);
        localStorage.setItem(currentAccountBalance,val);
    
  }


  current_balance = () =>
  {
    var currentAccountBalance = "acountBalance"+localStorage.getItem("mail");
    return(
      <p>your current balance is {localStorage.getItem(currentAccountBalance)}</p>
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
    this.update_balance();
    
    
    return(
     
      <div className="App">
      <header className="App-header">
      
      <p className="titre"> Account Balance </p>
      <p>{this.current_balance()}</p>
      <form id="my_form" >
				<label className="element-form">amount <input type="number" name="add_amout" onChange={this.handleChange} required/></label>
				<button onClick={this.handleSubmit.bind(this)}>Deposit</button>
        <button onClick={this.handleSubmit2.bind(this)}>Witdraw</button>
			</form>
      

      </header>
      </div>
      );
  }
}
 export default AccBalance;