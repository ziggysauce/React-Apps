import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Crypto from './components/Crypto';
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
				<h4>Shows current cryptocurrency exchange rates (USD).</h4>
				<Crypto />
				<p>Data provided by <span>[Insert Data API Link]</span></p>
				<Footer />
			</div>
		);
  }
}

export default App;