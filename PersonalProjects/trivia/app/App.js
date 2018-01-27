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
        'choices': [],
        'correct': '',
      }],
    };
  }

  componentWillMount() {
    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
    .then((results) => {
      const triviaData = results.data.results[0];
      const data = [{
        'category': triviaData.category,
        'question': {__html: triviaData.question},
        'choices': [
          triviaData.correct_answer,
          triviaData.incorrect_answers[0],
          triviaData.incorrect_answers[1],
          triviaData.incorrect_answers[2]
        ],
        'correct': triviaData.correct_answer
      }];

      // console.log('first: ', data[0].choices);

      let randomize = data[0].choices;
      let position = randomize.length, temp, random;
      // While there remain elements to shuffle...
      while (0 !== position) {
        // Pick a remaining element...
        random = Math.floor(Math.random() * position);
        position -= 1;
        // And swap it with the current element.
        temp = randomize[position];
        randomize[position] = randomize[random];
        randomize[random] = temp;
      }  
      // console.log('new: ', randomize);
      data[0].choices = randomize;

      this.setState({
        triviaData: data
      });
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  render() {
    // console.log(this.state.triviaData);

    return(
      <div className="app-container">
        <Title />
        <Ask data={this.state.triviaData} />
        <Answer data={this.state.triviaData} />
        <Session />
        <Footer />
      </div>
    );
  }
}

export default App;