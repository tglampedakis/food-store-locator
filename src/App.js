import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Homepage from "./pages/Homepage"
import Store from "./pages/Store"
import "./App.css"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" render={() => <Redirect to="/home" />} exact />
          <Route path="/home" render={() => <Homepage />} />
          <Route path="/details/:id" render={() => <Store />} />
        </Switch>
    </Router>
  );
}
