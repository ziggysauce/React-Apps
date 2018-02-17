import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/add.scss';

export default class Add extends Component {
  handleAddRecipe(e) {
    e.preventDefault();
    console.log('this is from add.js: ', this.props);
    this.props.handleAddRecipe();
  };

  render() {    
    console.log(this.props);
		return (
      <div className="add-container">
        <h1>Recipe Box</h1>
        <div className="add-button">
          <button onClick={this.props.handleNewRecipe}>+ Add new recipe</button>
        </div>

        {this.props.visible && 
        <div className="new-recipe-form">
          <form onSubmit={this.handleAddRecipe.bind(this)}>
            <h2>Whatcha makin'?</h2>
            <input name="image" type="text" placeholder="img url..." />
            <input name="title" type="text" placeholder="recipe name..." />
            <input name="ingredients" type="text" placeholder="separate ingredients with a comma" />
            <button className="submit-button">Submit</button>
          </form>
        </div>
        }
      </div>
		);
  }
}
