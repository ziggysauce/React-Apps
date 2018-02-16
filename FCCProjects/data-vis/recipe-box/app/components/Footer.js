import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/footer.scss';

class Footer extends Component {
  render() {
		return (
			<footer>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/daniel-nguyen-1a041495/" target="_blank"><i className="fab fa-linkedin social-icon"></i></a></li>
          <li><a href="https://github.com/ziggysauce" target="_blank"><i className="fab fa-github social-icon"></i></a></li>
          <li><a href="https://codepen.io/ziggysauce/" target="_blank"><i className="fab fa-codepen social-icon"></i></a></li>
          <li><a href="https://medium.com/@ziggysauce" target="_blank"><i className="fab fa-medium social-icon"></i></a></li>
        </ul>
        <p>Created by <span>Dan Nguyen</span></p>
      </footer>
		);
  }
}

export default Footer;