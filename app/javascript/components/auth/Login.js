import React, { Component } from "react";
import { connect } from 'react-redux';
// import axios from 'axios';
import { login } from '../../actions/auth/login'


class Login extends Component {
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
    
    login({ email, password })
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

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(login(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
