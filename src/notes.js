import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  eventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submit = () => {
    alert("hello");
    let object = {
      username: this.state.username,
      password: this.state.password
    };

    let promise = axios.post("http://localhost:8000/api-token-auth/", object);

    promise
      .then(response => {
        console.log("token", response.data.token);
        window.localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h3>Hello Guy</h3>

        <div>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
            onChange={this.eventHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.eventHandler}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.submit();
              this.props.history.push("/notes");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Notes);
