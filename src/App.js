import React, { Component} from 'react';
import logo from './logoWat.png';
import './App.css';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import Accueil from './Accueil.js';
import Home from './Home.js';



class App extends Component
{

  render()
  {

      if(localStorage.getItem("state") == '1')
      {
        return(
          <Accueil/>
          );
      }


      else
      {
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
