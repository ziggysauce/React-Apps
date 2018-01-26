import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/ask.scss';

class Ask extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="question-section">
        <div>
          <h3>Category: </h3>
          <h2>Question: </h2>
        </div>
      </div>
		);
  }
}

export default Ask;