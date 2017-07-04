import React, { Component } from "react";

class ProjectItems extends Component {
  deleteProject(){
    console.log('test');
  }
  
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this)}>X</a>  
      </li>
    );
  }
}

export default ProjectItems;
