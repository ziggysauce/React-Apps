import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/add.scss';

export default class Add extends Component {
  render() {    
    console.log('from add.js: ', this.props);
		return (
      <div className="add-container">
        <h1>Recipe Box</h1>
        <div className="add-button">
          <button onClick={this.props.handleNewRecipe}>+ Add new recipe</button>
        </div>
      </div>
		);
  }
}
