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
            <div>Current Progress</div>
            <div className="record">
              <div className="correct">
                <p>Correct: </p>
                <p>##</p>
              </div>
              <div className="incorrect">
                <p>Incorrect: </p>
                <p>##</p>
              </div>
            </div>
          </div>
          <div className="reset">
            <button>Restart</button>
          </div>
        </div>
      </div>
		);
  }
}

export default Session;