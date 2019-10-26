import React, { Component } from 'react';
class Accueil extends Component{

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

	render(){
		this.b();
		return(
		<header>
		<p className="titre"> MANGE TES MORTS</p>
		</header>
		)
	}
}

export default Accueil;