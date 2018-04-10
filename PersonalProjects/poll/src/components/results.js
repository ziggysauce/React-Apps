import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesOneInPercent() {
    if (this.store.getState().one) {
      return (this.store.getState().one / (this.store.getState().one + this.store.getState().two + this.store.getState().three)) * 100
    } else {
      return 0
    }
  }

  votesTwoInPercent() {
    if (this.store.getState().two) {
      return (this.store.getState().two / (this.store.getState().one + this.store.getState().two + this.store.getState().three)) * 100
    } else {
      return 0
    }
  }

  votesThreeInPercent() {
    if (this.store.getState().three) {
      return (this.store.getState().three / (this.store.getState().one + this.store.getState().two + this.store.getState().three)) * 100
    } else {
      return 0
    }
  }

  votesOneInPercentStyle() {
    return {
      width: this.votesOneInPercent()+'%'
    }
  }

  votesTwoInPercentStyle() {
    return {
      width: this.votesTwoInPercent()+'%'
    }
  }

  votesThreeInPercentStyle() {
    return {
      width: this.votesThreeInPercent()+'%'
    }
  }

  render() {
    return (
      <div className="results-wrapper">
        <span className="label">Thor: {this.votesOneInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar thor-color" style={this.votesOneInPercentStyle()}></div>
        </div>
        <span className="label">Captain America: {this.votesTwoInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar cap-color" style={this.votesTwoInPercentStyle()}></div>
        </div>
        <span className="label">Black Panther: {this.votesThreeInPercent().toFixed(2) + '%'}</span>
        <div className="progress">
          <div className="progress-bar panther-color" style={this.votesThreeInPercentStyle()}></div>
        </div>
      </div>
    )
  }
}

export default Results;