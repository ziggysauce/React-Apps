import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/markdown.scss';

class Markdown extends Component {
  constructor() {
		super();
		this.state = {};
  }
	
  render() {
		return (
			<div className="markdown-container">
        <div className="markdown-input">
          <textarea rows="25" />
        </div>
        <div className="markdown-output">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
		);
  }
}

export default Markdown;