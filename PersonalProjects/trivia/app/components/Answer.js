import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/answer.scss';

class Amswer extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="answer-section">
        <div className="choices-container">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
        </div>
      </div>
		);
  }
}

export default Amswer;