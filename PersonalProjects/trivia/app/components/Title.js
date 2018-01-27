import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/title.scss';

class Title extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="trivia-section">
        <h1>Final Answer?</h1>
      </div>
		);
  }
}

export default Title;