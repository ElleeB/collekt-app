import React from "react";
import Home from './Home'
import Dashboard from './Dashboard'
import Registration from './auth/Registration'
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </div>
    )
  }
}
