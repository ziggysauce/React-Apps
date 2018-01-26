import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import styles from './styles/app.scss';
import Title from './components/Title';
import Ask from './components/Ask';
import Answer from './components/Answer';
import Session from './components/Session';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="app-container">
        <Title />
        <Ask />
        <Answer />
        <Session />
        <Footer />
      </div>
    );
  }
}

export default App;