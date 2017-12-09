import React from "react";

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
        GitHub
      </a>
      <a
        href="https://twitter.com/ReactMoe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
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
