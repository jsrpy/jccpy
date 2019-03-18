import React, { Component } from "react";
import Project from "../Project/Project";
import "./ProjectList.css";

export default class ProjectList extends Component {
  render() {
    return (
      <div id="projectlist" className="row">
        <div className="center-align">
          <h4 className="waves-effect waves-light btn-large">
            Featured Projects
          </h4>
        </div>
        <hr />
        {this.props.projects.map(project => {
          return <Project project={project} />;
        })}
      </div>
    );
  }
}
