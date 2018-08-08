import React, { Component } from "react";
import axios from "axios";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notId: "",
      title: "",
      content: "",
      email: ""
    };
  }
  componentWillMount = () => {};
  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submit = () => {
    alert("hello");
    let object = {
      noteId: this.state.notId,
      title: this.state.title,
      content: this.state.content,
      email: this.state.email
    };
    let promise = axios.post("http://localhost:8000/api/notes", object);
    promise
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h3>Hello Guy</h3>
        <form>
          <div>
            <input
              type="text"
              placeholder="noteId"
              value={this.state.noteId}
              name="noteId"
              onChange={this.eventHandler}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.eventHandler}
            />
          </div>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.eventHandler}
          />
          <div>
            <textarea
              type="text"
              placeholder="content"
              value={this.state.content}
              name="content"
              onChange={this.eventHandler}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.submit;
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Notes;
