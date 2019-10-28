import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';




class Transfer extends Component
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

    TransferTo = (value) =>
    {
     
      var currentAccountBalance = "acountBalance"+localStorage.getItem("mail");
      console.log("accBal: "+ localStorage.getItem(currentAccountBalance));
      console.log("desti:"+sessionStorage.getItem("destination"));
      var transferDestiation = "acountBalance"+sessionStorage.getItem("destination");
      console.log("transf dest: "+ localStorage.getItem(transferDestiation));
      var val_t = Number(localStorage.getItem(currentAccountBalance)) - Number(value);
      var val_d = Number(localStorage.getItem(transferDestiation)) + Number(value);
      console.log("vart:"+val_t);
      console.log("vard:"+val_d);
      alert("pause");
      if (val_t > 0)
      {
        localStorage.removeItem(currentAccountBalance);
        localStorage.setItem(currentAccountBalance, val_t);
        localStorage.removeItem(transferDestiation);
        localStorage.setItem(transferDestiation, val_d);


      }
      else{
        alert("tu es trop pauvre dsl");
      }
      
    
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

  handleChange2 = (event) =>
	{
    sessionStorage.removeItem("destination");
    sessionStorage.setItem("destination",event.target.value);
    console.log("handledest:"+sessionStorage.getItem("destination"));
    
  }
  
  handleSubmit() {
    this.TransferTo(this.state.value);
    
  }


  render()
  {
    this.update_balance();
    
    
    return(
     
      <div className="App">
      <header className="App-header">
      
      <p className="titre"> Transfer </p>
      <p>{this.current_balance()}</p>
      <form id="my_form">
      <label className="element-form">destined user : <input type="text" name="destination" onChange={this.handleChange2} required/></label>

				<label className="element-form">amount :<input type="number" name="transfer_amount" onChange={this.handleChange} required/></label>
				<button onClick={this.handleSubmit.bind(this)}>Transfer</button>
       
			</form>
      

      </header>
      </div>
      );
  }
}
 export default Transfer;