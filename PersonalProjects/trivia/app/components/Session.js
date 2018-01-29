import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/session.scss';

class Session extends Component {
  constructor() {
		super();
    this.state = {};    
	}
	
  render() {
		return (
			<div className="session-section">
        <div className="session-container">
          <div className="progress">
            <h3>Current Progress</h3>
            <div className="record">
              <div className="correct">
                <p>Correct</p>
                <p>{this.props.results.correct}</p>
              </div>
              <div className="incorrect">
                <p>Incorrect</p>
                <p>{this.props.results.incorrect}</p>
              </div>
            </div>
          </div>
          <div className="reset">
            <button onClick={e => this.props.resetSession()}>Reset</button>
          </div>
        </div>
      </div>
		);
  }
}

export default Session;