import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/form.scss';

export default class Form extends Component {
  handleAddRecipe(e) {
    e.preventDefault();
    // console.log('this is from add.js: ', this.props);

    const data = {
      image: e.target.elements.image.value,
      title: e.target.elements.title.value,
      ingredients: e.target.elements.ingredients.value.split(',')
    }

    this.props.handleAddRecipe(data);
  };

  handleChangeRecipe(e) {
    e.preventDefault();
    // console.log('this is from edit: ', this.props);

    const data = {
      image: e.target.elements.image.value,
      title: e.target.elements.title.value,
      ingredients: e.target.elements.ingredients.value.split(',')
    }

    this.props.handleChangeRecipe(data, this.props.index);
  }

  render() {    
    // console.log("from form: ", this.props);
		return (
      <div className="form-container">
        {this.props.add && 
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
        {this.props.edit && 
          <div className="new-recipe-form">
            <form onSubmit={this.handleChangeRecipe.bind(this)}>
              <h2>Whatcha makin'?</h2>
              <input onChange={(e) => this.handleChangeRecipe.bind(this)} name="image" type="text" defaultValue={this.props.selectedRecipe.image} />
              <input onChange={(e) => this.handleChangeRecipe.bind(this)} name="title" type="text" defaultValue={this.props.selectedRecipe.title} />
              <input onChange={(e) => this.handleChangeRecipe.bind(this)} name="ingredients" type="text" defaultValue={this.props.selectedRecipe.ingredients} />
              <button className="submit-button">Submit</button>
            </form>
          </div>
          }
      </div>
		);
  }
}
