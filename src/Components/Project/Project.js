import React, { Component } from "react";
import "./Project.css";

export default class Project extends Component {
  render() {
    return (
      <div className="project card-panel horizontal z-depth-0 row">
        <div className="card-image col s12 m6"><img alt="" src={this.props.project.img} /></div>

        <div className="card-stacked col s12 m6">
          <h4>{this.props.project.name}</h4>
          <p className="stack">Tech Stack: <span className='skill'>{this.props.project.skill}</span></p>
          {this.props.project.github ? <p className="source"><a href={this.props.project.github} target="_blank" rel="noopener noreferrer">Source Code</a></p> : ""}
          &nbsp;&nbsp;&nbsp;
          {this.props.project.demo ? <p className="demo"><a href={this.props.project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></p> : ""}
          <p className="description">{this.props.project.description}</p>
          <hr />
        </div>
        
      </div>
    );
  }
}
