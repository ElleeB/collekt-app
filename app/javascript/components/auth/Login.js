import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
        loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    axios.post(
      "http://localhost:3001/login",
      {
        user: {
          email: email,
          password: password
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      console.log("login response", response);
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
