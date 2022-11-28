import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralInformation from "./components/GeneralInformation";
import Create from "./components/Create";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="content">
        <Create />
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
