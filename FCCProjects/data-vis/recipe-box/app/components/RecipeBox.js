import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/recipebox.scss';
import Card from './Card';

class RecipeBox extends Component {
  render() {
		return (
			<div className="recipe-box-container">
        <Card 
          recipes={this.props.recipes}
          ingredients={this.props.ingredients}
          modal={this.props.modal}
          handleShowIngredients={this.props.handleShowIngredients}
        />
      </div>
		);
  }
}

export default RecipeBox;