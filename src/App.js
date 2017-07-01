import React, { Component } from "react";
import Projects from "./Components/Projects";

import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [{
                    title: "Business Website",
                    category: "Web Something"
                },
                {
                    title: "Social App",
                    category: "Mobile Dev"
                },
                {
                    title: "Ecommerce Shopping Cart",
                    category: "Web Dev"
                }
            ]
        };
    }
    render() {
        return ( <
            div className = "App" >
            <
            p > My App < /p> <Projects projects={this.state.projects} / > { " " } <
            /div>
        );
    }
}

export default App;