import React, { Component } from 'react';
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import App from './App.js';
class Accueil extends Component{
	render(){
		return(
		<header>
		<p className="titre"> MANGE TES MORTS</p>
		</header>
		)
	}
}

export default Accueil;