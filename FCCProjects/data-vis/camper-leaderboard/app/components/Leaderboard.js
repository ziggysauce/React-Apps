import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/leaderboard.scss';

class Leaderboard extends Component {
  render() {
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
              <th>
                <button className="toggle-score" onClick={e => this.props.getRecent(e)}>Points (past 30 days)</button>
              </th>
              <th>
                <button className="toggle-score" onClick={e => this.props.getAllTime(e)}>Points (all time)</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user, index) => {
              return (
                <tr key={index +1}>
                  <td>{index + 1}</td>
                  <td className="user-display">
                    <img src={user.img} width="40px"/>
                    <a href={'https://www.freecodecamp.org/' + user.username}>{user.username}</a>
                  </td>
                  <td>{user.recent}</td>
                  <td>{user.alltime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
		);
  }
}

export default Leaderboard;