import React from 'react';
import UserDetails from "./components/UserDetails/UserDetails.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div>
      <Router>
      <Redirect to="/users-list" />
        <Switch>
          <Route path="/users-list">
            <UserList />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
