import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/crypto.scss';
import Card from './Card';

class Crypto extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="crypto-container">
				<Card />
			</div>
		);
  }
}

export default Crypto;