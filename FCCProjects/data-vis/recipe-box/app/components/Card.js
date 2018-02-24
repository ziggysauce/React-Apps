import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/card.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {}

    this.handleShowIngredients = this.handleShowIngredients.bind(this);
  }

  handleShowIngredients(e, recipe) {
    console.log("this hit: ", recipe.ingredients);
    const ingredients = recipe.ingredients;
    this.setState({
      ingredients: ingredients,
      modal: "active"
    });

    this.props.handleShowIngredients(recipe);
  }


  render() {
    console.log('state: ', this.state);
    console.log('from card.js: ', this.props.recipes);
		return (
      <div className="card-wrapper">
        {this.props.recipes.map((recipe, index) => {
          return (
            <div className="card-container" key={index}>
              <div className="card-image">
                <img src={recipe.image} />
              </div>
              <div className="card-desc">
                <h3>{recipe.title}</h3>
                <div className="row">
                  <button onClick={(e) => this.handleShowIngredients(e, recipe)}><i className="fas fa-ellipsis-h"></i></button>
                  <button onClick={(e) => this.props.handleEditRecipe(e, recipe, index)}><i className="far fa-edit"></i></button>
                  <button><i className="far fa-trash-alt"></i></button>
                </div>
              </div>
              <div className="card-ingredients">
                <p>{recipe.ingredients.length} Ingredients</p>
              </div>
            </div>
          );
        })}
      </div>
		);
  }
}

export default Card;