import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/leaderboard.scss';

class Leaderboard extends Component {
  render() {
    console.log('hit: ', this.props.data[0].username);

		return (
			<div className="leaderboard-container">
        <h1>camperLeaderboard  
          <a href="https://www.freecodecamp.org" target="_blank">
          <i className="fab fa-free-code-camp fa-lg fc-logo"></i>
          </a>
        </h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Camper</th>
              <th className="thirty-days">Points (past 30 days)</th>
              <th className="all-time">Points (all time)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Filler</td>
              <td>Filler</td>
              <td>Filler</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default Leaderboard;