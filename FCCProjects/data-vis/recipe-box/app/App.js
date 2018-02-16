import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Footer from './components/Footer';
import RecipeBox from './components/RecipeBox';
import Add from './components/Add';


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {};
	}
	
  render() {
		return (
			<div className="app-container">
				<Add />
				<RecipeBox />
				<Footer />
			</div>
		);
  }
}

export default App;