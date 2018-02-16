import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Footer from './components/Footer';
import RecipeBox from './components/RecipeBox';
import Add from './components/Add';

// Seed data for recipes
const recipes = [
	{
		image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=2700&q=80',
		title: 'Dumplings',
		ingredients: ['meat', 'wonton skin', 'vegetables']
	},
	{
		image: 'https://images.unsplash.com/photo-1490091119006-59eb16fe739d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6bd3a03c302aa8767030bec748888ca&auto=format&fit=crop&w=2689&q=80',
		title: 'Avocado Toast',
		ingredients: ['bread', 'avocado']
	},
	{
		image: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85cfa1d6d003f6e82f46bc5a394a592&auto=format&fit=crop&w=1567&q=80',
		title: 'Burgers',
		ingredients: ['buns', 'patties', 'cheese', 'bacon', 'vegetables']
	},
	{
		image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1950&q=80',
		title: 'Caesar Salad',
		ingredients: ['lettuce', 'cheese', 'croutons', 'chicken', 'caesar dressing']
	}
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {recipes};
	}

	render() {
		console.log('from app.js: ', recipes);
		return (
			<div className="app-container">
				<Add />
				<RecipeBox recipes={this.state.recipes}/>
				<Footer />
			</div>
		);
  }
}

export default App;