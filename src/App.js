import React from "react";

import github from "./assets/github.svg";
import twitter from "./assets/twitter.svg";

import placeholder from "./assets/under-construction.png";

import "./App.css";

const App = () => (
  <div className="App">
    <nav className="App-nav">
      <a
        href="https://github.com/react-moe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <a
        href="https://twitter.com/ReactMoe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
      </a>
    </nav>
    <img
      className="App-placeholder"
      src={placeholder}
      alt="Under Construction"
    />
  </div>
);

export default App;
