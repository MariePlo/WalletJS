import React, { Component} from 'react';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import Accueil from './Accueil.js';



class App extends Component
{

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
          <Accueil/>
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
