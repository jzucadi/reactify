import React, { Component } from "react";
import Projects from "./Components/Projects";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [{
                title: 'Business Website',
                category: 'Web Something'
            }]
        }
    }
    render() {
        return ( <
            div className = "App" >
            <
            p > My App < /p> <Projects / >
            <
            /div>
        );
    }
}

export default App;