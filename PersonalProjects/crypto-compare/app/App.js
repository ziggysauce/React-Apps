import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Card from './components/Card';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="app-container">
				<h1>Cryptocurrency Exchange</h1>
				<h4>Cryptocurrency exchange rates (USD). Percentage change over last 24 hours.</h4>
				<Card />
				<p>Data provided by <a href="https://www.cryptocompare.com/api" target="_blank">CryptoCompare</a></p>
				<Footer />
			</div>
		);
  }
}

export default App;