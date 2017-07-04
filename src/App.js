import React, { Component } from "react";
import uuid from 'uuid';
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
          id:uuid.v4(),
          title: "Business Website",
          category: "Web Something"
        },
        {
          id:uuid.v4(),
          title: "Social App",
          category: "Mobile Dev"
        },
        {
          id:uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Dev"
        }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <p> My App </p> <Projects projects={this.state.projects} />  
      </div>
    );
  }
}

export default App;
