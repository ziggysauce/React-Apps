import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/recipebox.scss';
import Card from './Card';

class RecipeBox extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div>
        <Card />
      </div>
		);
  }
}

export default RecipeBox;