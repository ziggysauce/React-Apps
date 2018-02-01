import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/footer.scss';

class Footer extends Component {
  constructor() {
		super();
		this.state = {};
	}
	
  render() {
		return (
			<footer>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/daniel-nguyen-1a041495/" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://github.com/ziggysauce" target="_blank"><i className="fa fa-github"></i></a></li>
          <li><a href="https://codepen.io/ziggysauce/" target="_blank"><i className="fa fa-codepen"></i></a></li>
          <li><a href="https://medium.com/@ziggysauce" target="_blank"><i className="fa fa-medium"></i></a></li>
        </ul>
        <p>Created by <span>Dan Nguyen</span></p>
      </footer>
		);
  }
}

export default Footer;