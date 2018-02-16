import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/card.scss';

class Card extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="card-container">
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=2700&q=80" />
        </div>
        <div className="card-desc">
          <h3>Recipe Title</h3>
          <div className="row">
            <button><i className="far fa-caret-square-down"></i></button>
            <button><i className="far fa-edit"></i></button>
            <button><i className="far fa-trash-alt"></i></button>
          </div>
        </div>
        <div className="card-ingredients">
          <p>3 ingredients</p>
        </div>
      </div>
		);
  }
}

export default Card;