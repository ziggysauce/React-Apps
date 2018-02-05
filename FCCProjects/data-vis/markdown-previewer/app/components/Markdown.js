import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/markdown.scss';

const marked = require('marked');

class Markdown extends Component {
  constructor() {
		super();
    this.state = {
      value: 'Heading\n=======\n \n# Another heading\n \nSub-heading\n-----------\n\
      \n## Another sub-heading\n \n### A smaller heading\n \nParagraphs are separated by a blank line.\n\
      \nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**,\
      `monospace`, ~~strikethrough~~ .\n\n Unordered list (use asterisks):\n\n  * butter\n  * sugar\n  * flour\n\
      \nOrdered list (use numbers):\n\n  1. Pre-heat over\n  2. Mix ingredients\n  3. Bake for 20 minutes\n\
      \nFor links use brackets and parentheses []()  \
      \n[Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)'
    };    

  this.handleChange = this.handleChange.bind(this);
  this.output = this.output.bind(this);
  }

  
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
	
  output(val) {
    const markup = marked(val, {sanitize: true});
    return {
      __html: markup
    };
  }

  render() {
    console.log('hit: ', this.state);
		return (
			<div className="markdown-container">
        <div className="markdown-input">
          <h2 className="div-title">Markup:</h2>
          <textarea rows="35" type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="markdown-output">
          <h2 className="div-title">Output:</h2>
          <span dangerouslySetInnerHTML={this.output(this.state.value)}></span>
        </div>
      </div>
		);
  }
}

export default Markdown;