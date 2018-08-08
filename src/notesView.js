import React, { Component } from "react";
import axios from "axios";
class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentWillMount = () => {
    this.submit();
  };
  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submit = () => {
    const options = {
      headers: { Authorization: `token ${window.localStorage.token}` }
    };

    console.log("headers==>", options);
    let promise = axios.get("http://localhost:8000/api/notes/", options);
    console.log("getRequest", promise);
    promise
      .then(response => {
        console.log("notes===>:", response.data);
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h3>Hello Guy NOTES </h3>
        hello
        {this.state.notes.map((e, index) => {
          console.log("this.state==>:", e);
          return (
            <div>
              <div>{e.title}</div>
              <div>{e.content}</div>
              <div>{e.id}</div>
              <div>{e.url}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NotesView;
