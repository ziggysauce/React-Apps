import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/recipebox.scss';
import Card from './Card';

class RecipeBox extends Component {
  render() {
		console.log('from recipebox.js: ', this.props.recipes);
		return (
			<div>
        <Card recipes={this.props.recipes}/>
      </div>
		);
  }
}

export default RecipeBox;