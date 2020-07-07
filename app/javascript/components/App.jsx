import React from "react";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Registration from './auth/Registration'
import Login from './auth/Login'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}
