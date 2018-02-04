import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Markdown from './components/Markdown';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<div className="app-container">
        <Markdown />
				<Footer />
			</div>
		);
  }
}

export default App;