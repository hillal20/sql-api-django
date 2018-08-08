import React, { Component } from "react";
import Notes from "./notes.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Notes</h1>
        <Notes />
      </div>
    );
  }
}

export default App;
