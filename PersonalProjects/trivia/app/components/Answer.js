import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/answer.scss';

class Answer extends Component {
  constructor(props) {
		super(props);
    this.state = {};    

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    const clicked = e.target;
    const answer = this.props.data.triviaData[0].correct.__html;

    if (clicked.innerHTML === answer) {
      e.target.className = 'highlightCorrect';
      this.props.updateCorrect();

      setTimeout(() => {
        clicked.className = 'neutral';
      }, 500);
    } else {
      e.target.className = 'highlightIncorrect';
      this.props.updateIncorrect();

      setTimeout(() => {
        clicked.className = 'neutral';
      }, 500);
    }
  }

  render() {
    // console.log(this.props.data.triviaData[0].choices);
    // console.log('answer: ', this.props.data.triviaData[0].correct.__html);
    // console.log('new state: ', this.state);
    // console.log('answer reached');

		return (
			<div className="answer-section">
        <div className="choices-container">
          <button onClick={e => this.checkAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[0]}></button>
          <button onClick={e => this.checkAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[1]}></button>
          <button onClick={e => this.checkAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[2]}></button>
          <button onClick={e => this.checkAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[3]}></button>
        </div>
      </div>
		);
  }
}

export default Answer;