import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/add.scss';

class Add extends Component {
  render() {
		return (
      <div>
        <h1>Recipe Box</h1>
        <div className="add-button">
          <button>+ Add new recipe</button>
        </div>
      </div>
		);
  }
}

export default Add;