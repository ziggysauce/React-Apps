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
          <h3>Category</h3>
          <p>{this.props.data.triviaData[0].category}</p>
          <h2>Question</h2>
          <p dangerouslySetInnerHTML={this.props.data.triviaData[0].question}></p>
        </div>
      </div>
		);
  }
}

export default Ask;