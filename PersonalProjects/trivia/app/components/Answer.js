import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/answer.scss';

class Answer extends Component {
  constructor(props) {
		super(props);
    this.state = {};    

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  showAnswer() {
    const choices = document.querySelectorAll('.choices-container button');
    const answer = this.props.data.triviaData[0].correct.__html;

    choices.forEach((e) => {
      if (e.innerHTML === answer) {
        e.className = 'highlightCorrect';

        setTimeout(() => {
          e.className = 'neutral';
        }, 900);
      }
    });
  }

  checkAnswer(e) {
    const clicked = e.target;
    const answer = this.props.data.triviaData[0].correct.__html;

    this.showAnswer();

    if (clicked.innerHTML === answer) {
      e.target.className = 'highlightCorrect';
      this.props.updateCorrect();

      setTimeout(() => {
        clicked.className = 'neutral';
      }, 900);
    } else {
      e.target.className = 'highlightIncorrect';
      this.props.updateIncorrect();

      setTimeout(() => {
        clicked.className = 'neutral';
      }, 900);
    }
  }

  render() {
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