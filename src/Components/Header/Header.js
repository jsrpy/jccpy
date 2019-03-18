import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="card-panel horizontal white teal-text row z-depth-0">
        <h2>Justin Ching</h2>
        <hr></hr>
        <h4>Full Stack Data Scientist</h4>
        <p className='col s12 m6 14'>Github: <a href='https://github.com/jsrpy' target="_blank" rel="noopener noreferrer">github.com/jsrpy</a> </p>
        <p className='col s12 m6 14'>Linkedin:&nbsp;<a href='https://www.linkedin.com/in/justinc5319/' target="_blank" rel="noopener noreferrer"ƒ>linkedin.com/in/justinc5319/</a> </p>
      </div>
    );
  }
}
