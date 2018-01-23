import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/card.scss';

class Card extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="card-container">
				Card Data Here
			</div>
		);
  }
}

export default Card;