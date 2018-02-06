import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './styles/app.scss';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			data: [{}]
		};

		this.getAllTime = this.getAllTime.bind(this);
		this.getRecent = this.getRecent.bind(this);
	}

	getRecent() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
		.then((results) => {
			const recentData = results.data;
			this.setState({
				data: recentData
			});
		}).catch(err => {
			console.log(err);
		});
	}

	getAllTime() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
		.then((results) => {
			const recentData = results.data;
			this.setState({
				data: recentData
			});
		}).catch(err => {
			console.log(err);
		});
	}

	componentDidMount() {
		this.getRecent();
	}
	
  render() {
		return (
			<div className="app-container">
				<Leaderboard data={this.state.data} getAllTime={this.getAllTime.bind(this)} getRecent={this.getRecent.bind(this)}/>
				<Footer />
			</div>
		);
  }
}

export default App;