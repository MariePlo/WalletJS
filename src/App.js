import React, { Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import Accueil from './Accueil.js';
import Home from './Home.js';
import AccBalance from './AccBalance.js';
import Cards from './Cards.js';
import Transfer from './Transfer.js';




class App extends Component
{

  LogOut = () => 
  {
   
    sessionStorage.removeItem("state");
    window.location.reload();
  }

  b = () =>{
    console.log("local//users:\n");
    for(var i = 0; i<localStorage.length; i++)
    {
      console.log(i + " " + localStorage.getItem(localStorage.key(i)) + "\n");
    }

    console.log("session//status:\n");

    for(var u = 0; u<sessionStorage.length; u++)
    {
      console.log(u + " " + sessionStorage.getItem(sessionStorage.key(u)) + "\n");
    }
  }

  render()
  { 

      if(sessionStorage.getItem("state") === '1')
      {
        this.b();
        return(
          <BrowserRouter>
          <nav className="AppNav">
        <div className="HomeBox"> <Link to="/"> Home </Link> </div>
          
        <div className="CartesBox" > <Link to="/Cards">My cards</Link> </div>
        
        <div className="HomeBox"> <Link to="/AccBalance">Account Balance</Link></div>

        <div className="HomeBox"> <Link to="/Transfer">Transfer</Link></div>
            
        <button className="LogOutBox" onClick={this.LogOut}> Log Out </button>
        </nav>
 <Route exact path="/" component={Home} />
 <Route path="/Accueil" component={Accueil} />
 <Route path="/AccBalance" component={AccBalance} />
 <Route path="/Cards" component={Cards} />
 <Route path="/Transfer" component={Transfer} />

 </BrowserRouter>

          );
      }



      else
      {
        this.b();
        return(

      <header className="App-header">
      <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <p className="titre"> Watermelon </p>
      </div>
      <div className="Forms">
      <Login/>
      <SignUpForm/>
      </div>
      </header>

          );
      }

  }
}
 export default App;
