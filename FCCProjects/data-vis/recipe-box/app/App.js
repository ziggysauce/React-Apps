import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Footer from './components/Footer';
import RecipeBox from './components/RecipeBox';
import Add from './components/Add';
import Form from './components/Form';
import OptionModal from './components/OptionModal';

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
		this.state = {
			recipes: [],
			add: false,
			ingredients: false,
			edit: false,
			modal: undefined,
			index: '',
			selectedRecipe: {
				image: '',
				ingredients: [],
				title: ''
			},
		};

		this.handleNewRecipe = this.handleNewRecipe.bind(this);
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
		this.handleShowIngredients = this.handleShowIngredients.bind(this);
		this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
		this.handleEditRecipe = this.handleEditRecipe.bind(this);
		this.handleChangeRecipe = this.handleChangeRecipe.bind(this);
		this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
	};

	handleNewRecipe() {
		// console.log('new recipe clicked: ', this.state);
    !this.state.add ? this.setState({ add: true, edit: false }) : this.setState({ add: false });
	};
	
	handleAddRecipe(data) {
		// console.log('from submit click: ', data);
		this.setState((prevState) => ({ 
			recipes: prevState.recipes.concat(data),
			add: false
		}));
	};

	handleShowIngredients(recipe) {
		// console.log('show ingredients: ', recipe);
		this.setState({ 
			ingredients: !this.state.ingredients,
			modal: "active",
			selectedRecipe: recipe,
		})
	}

	handleClearSelectedOption() {
    this.setState({ 
			modal: undefined,
			selectedRecipe: {
				image: '',
				ingredients: [],
				title: ''
			},
		});
	}
	
	handleEditRecipe(e, recipe, index) {
		!this.state.edit ? this.setState({ edit: true, add: false, selectedRecipe: recipe, index: index }) : this.setState({ edit: false });
	}

	handleChangeRecipe(data, index) {
		// console.log('from submit click: ', data, "this is index: ", index);
		let recipes = Object.assign([], this.state.recipes);
		recipes[index] = data;
		this.setState({recipes: recipes, edit: false});
	}

	handleDeleteRecipe(index) {
		let recipes = Object.assign([], this.state.recipes);
		recipes.splice(index, 1);
		this.setState({recipes: recipes});
	}

	componentDidMount() {
    try {
      const json = localStorage.getItem('recipes');
			const recipes = JSON.parse(json);

      if (recipes) {
        this.setState((prevState) => ({
					recipes: prevState.recipes.concat(recipes)
				}));
      }
    } catch (e) {
			// Do nothing at all
			console.log('Error getting local storage: ', e);
    }
	}
	
  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      const json = JSON.stringify(this.state.recipes);
      localStorage.setItem('recipes', json);
    }
  }

	render() {
		return (
			<div className="app-container">
				<Add 
					handleNewRecipe={this.handleNewRecipe}
				/>
				<Form 
					handleAddRecipe={this.handleAddRecipe}
					handleChangeRecipe={this.handleChangeRecipe}
					add={this.state.add}
					edit={this.state.edit}
					index={this.state.index}
					selectedRecipe={this.state.selectedRecipe}
				/>
				<RecipeBox 
					recipes={this.state.recipes}
					ingredients={this.state.ingredients}
					modal={this.state.modal}
					edit={this.state.edit}
					selectedRecipe={this.state.selectedRecipe}
					handleShowIngredients={this.handleShowIngredients}
					handleEditRecipe={this.handleEditRecipe}
					handleChangeRecipe={this.handleChangeRecipe}
					handleDeleteRecipe={this.handleDeleteRecipe}
				/>
				<OptionModal
					modal={this.state.modal}
					selectedRecipe={this.state.selectedRecipe}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
				<Footer />
			</div>
		);
  }
}

export default App;