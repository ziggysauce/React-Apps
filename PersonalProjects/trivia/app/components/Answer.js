import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/answer.scss';

class Answer extends Component {
  constructor(props) {
		super(props);
		this.state = {};
  }

  randomize() {
    console.log('im getting hit');
  }

  render() {
    console.log(this.props.data[0].choices);
    console.log('answer: ', this.props.data[0].correct);

		return (
			<div className="answer-section">
        <div className="choices-container">
          <button>{this.props.data[0].choices[0]}</button>
          <button>{this.props.data[0].choices[1]}</button>
          <button>{this.props.data[0].choices[2]}</button>
          <button>{this.props.data[0].choices[3]}</button>
        </div>
      </div>
		);
  }
}

export default Answer;