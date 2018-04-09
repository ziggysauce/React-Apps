import React, { Component } from 'react';
import { voteOne, voteTwo, voteThree } from './actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteOne = () => {
    this.store.dispatch(voteOne());
  }

  handleVoteTwo = () => {
    this.store.dispatch(voteTwo());
  }

  handleVoteThree = () => {
    this.store.dispatch(voteThree());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <h2>Who are you most excited to see in the new Avengers: Infinity War movie?</h2>
          <h4>Click on a hero below to vote!</h4>
          <br />
          <div className="icon-set">
            <div className="vote-icon">
              <img src="https://pre00.deviantart.net/3c93/th/pre/i/2018/092/c/6/king_thor_icon_by_thelivingethan-dc7ovrv.png" height="96" alt="thor" onClick={this.handleVoteOne}></img>
            </div>
            <div className="vote-icon">
              <img src="https://pre00.deviantart.net/985f/th/pre/i/2018/085/1/6/steve_rogers_icon_by_thelivingethan-dc70574.png" height="96" alt="captain america" onClick={this.handleVoteTwo}></img>
            </div>
            <div className="vote-icon">
              <img src="https://pre00.deviantart.net/303e/th/pre/i/2018/019/d/9/black_panther_character_icon_by_thelivingethan-dc0ju3a.png" height="96" alt="black panther" onClick={this.handleVoteThree}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;