import React from "react";
import Home from './Home'
import Dashboard from './Dashboard'
import { Route, Switch } from 'react-router-dom'
// import Routes from "../routes/Index";

// export default props => <>{Routes}</>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default App
