import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/leaderboard.scss';

class Leaderboard extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="leaderboard-container">
        <h1>camperLeaderboard <i className="fab fa-free-code-camp fa-lg"></i></h1>
        <table>
          <tr>
            <th>Rank</th>
            <th>Camper</th>
            <th className="thirty-days">Points (past 30 days)</th>
            <th className="all-time">Points (all time)</th>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
          <tr>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
            <td>Filler</td>
          </tr>
        </table>
      </div>
		);
  }
}

export default Leaderboard;