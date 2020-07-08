import React from "react";
import {
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from './auth/Registration';
import Login from './auth/Login';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Collekt!</h2>
        <hr />
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/registration">Registration</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
      </div>
    )
  }
}
