import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/card.scss';

class Card extends Component {
  render() {
    console.log('from card.js: ', this.props.recipes);
		return (
      <div className="recipe-box-container">
        {this.props.recipes.map((recipe, index) => {
          return (
            <div className="card-container" key={index}>
              <div className="card-image">
                <img src={recipe.image} />
              </div>
              <div className="card-desc">
                <h3>{recipe.title}</h3>
                <div className="row">
                  <button><i className="fas fa-arrow-down"></i></button>
                  <button><i className="far fa-edit"></i></button>
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