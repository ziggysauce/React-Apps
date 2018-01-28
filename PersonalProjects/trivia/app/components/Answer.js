import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/answer.scss';

class Answer extends Component {
  constructor(props) {
		super(props);
    this.state = {
      // triviaData: this.props.data.triviaData,
      // correct: this.props.data.correct,
      // incorrect: this.props.data.incorrect,
    };
    
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    const clicked = e.target.innerHTML;
    const answer = this.props.data.triviaData[0].correct.__html;

    if (clicked === answer) {
      e.target.className = 'highlightCorrect';

      this.setState((prevState, props) => ({
        triviaData: this.props.data.triviaData[0],
        correct: this.props.data.correct + 1,
        incorrect: this.props.data.incorrect,
      }));

      console.log(this.state);
    } else {
      e.target.className = 'highlightIncorrect';

      this.setState((prevState, props) => ({
        triviaData: this.props.data.triviaData[0],
        correct: this.props.data.correct,
        incorrect: this.props.data.incorrect + 1,
      }));
    }
  }

  render() {
    // console.log(this.props.data.triviaData[0].choices);
    // console.log('answer: ', this.props.data.triviaData[0].correct.__html);
    // console.log('new state: ', this.state);

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