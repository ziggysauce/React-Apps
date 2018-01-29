import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

import styles from './styles/app.scss';
import Title from './components/Title';
import Ask from './components/Ask';
import Answer from './components/Answer';
import Session from './components/Session';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      triviaData: [{
        'category': '',
        'question': {__html: ''},
        'choices': [{__html: ''}, {__html: ''}, {__html: ''}, {__html: ''}],
        'correct': {__html: ''},
      }],
      correct: 0,
      incorrect: 0,
    };

    this.updateCorrect = this.updateCorrect.bind(this);
    this.updateIncorrect = this.updateIncorrect.bind(this);
    this.resetSession = this.resetSession.bind(this);
  }

  getData() {
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
    .then((results) => {
      const triviaData = results.data.results[0];
      const data = [{
        'category': triviaData.category,
        'question': {__html: triviaData.question},
        'choices': [
          {__html: triviaData.correct_answer},
          {__html: triviaData.incorrect_answers[0]},
          {__html: triviaData.incorrect_answers[1]},
          {__html: triviaData.incorrect_answers[2]}
        ],
        'correct': {__html: triviaData.correct_answer}
      }];

      let randomize = data[0].choices;
      let position = randomize.length, temp, random;
      // While there are elements to shuffle...
      while (0 !== position) {
        // Pick a remaining element
        random = Math.floor(Math.random() * position);
        position -= 1;
        // Swap it with the current element.
        temp = randomize[position];
        randomize[position] = randomize[random];
        randomize[random] = temp;
      }  
      data[0].choices = randomize;

      this.setState({
        triviaData: data
      });
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  componentDidMount() {
    this.getData()
  }

  updateCorrect() {
    this.setState((prevState, props) => ({
      correct: this.state.correct + 1,
    }));

    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  updateIncorrect() {
    this.setState((prevState, props) => ({
      incorrect: this.state.incorrect + 1,
    }));

    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  resetSession() {
    this.setState((prevState, props) => ({
      correct: 0,
      incorrect: 0
    }));
  }

  render() {
    return(
      <div className="app-container">
        <Title />
        <Ask data={this.state} />
        <Answer data={this.state} updateCorrect={this.updateCorrect.bind(this)} updateIncorrect={this.updateIncorrect.bind(this)} />
        <Session results={this.state} resetSession={this.resetSession.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;