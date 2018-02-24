import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/add.scss';

export default class Add extends Component {
  handleAddRecipe(e) {
    e.preventDefault();
    console.log('this is from add.js: ', this.props);

    const data = {
      image: e.target.elements.image.value,
      title: e.target.elements.title.value,
      ingredients: e.target.elements.ingredients.value.split(', ')
    }

    this.props.handleAddRecipe(data);
  };

  render() {    
    console.log(this.props);
		return (
      <div className="add-container">
        <h1>Recipe Box</h1>
        <div className="add-button">
          <button onClick={this.props.handleNewRecipe}>+ Add new recipe</button>
        </div>

        {this.props.add && 
        <div className="new-recipe-form">
          <form onSubmit={this.handleAddRecipe.bind(this)}>
            <h2>Whatcha makin'?</h2>
            <input name="image" type="text" placeholder="img url..." />
            <input name="title" type="text" placeholder="recipe name..." />
            <input name="ingredients" type="text" placeholder="separate ingredients with a comma and space" />
            <button className="submit-button">Submit</button>
          </form>
        </div>
        }
      </div>
		);
  }
}
