/*
 * Real time private chatting app using React, Nodejs, mongodb and Socket.io
 * @author Shashank Tiwari
 */

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

import './App.css';
import Users from './pages/users';
import LogUser from './pages/logs';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/" exact component={Authentication} />
          <Route exact path="/users/:userid" exact component={Users} />
          <Route exact path="/home/" component={Home} />
          <Route exact path="/users/" component={Users} />
          <Route exact path="/logs/" component={LogUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
