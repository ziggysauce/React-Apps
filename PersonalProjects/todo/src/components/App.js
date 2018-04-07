import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <span className="test">App.js reached!</span>
        <div>
          <p className="test" id="tester">A p tag test</p>
        </div>
      </div>
    );
  }
}

export default App;