/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

require('dotenv').config();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        const apiUrl= process.env.REACT_APP_API_URL;
        if (!apiUrl) {
            throw new Error("API_URL environment variable is not set.");
        }
        fetch(apiUrl)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    /*    
    callAPI() {
        const apiUrl= process.env.REACT_APP_API_UR;
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    */

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
