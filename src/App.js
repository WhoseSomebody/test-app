import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/HomePage';
import User from './containers/UserPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'Home'
    };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:username" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
