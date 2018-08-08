import React, { Component } from "react";
import Notes from "./notes.js";
import cors from "cors";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NotesView from "./notesView.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My Notes</h1>
        <Route exact path="" component={Notes} />
        <Route exact path="/notes" component={NotesView} />
      </div>
    );
  }
}

export default App;
