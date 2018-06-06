import React, { Component } from 'react';

import './App.css';
import Activities from './Activities';
import ActivityDetail from './ActivityDetail';
import Stats from './Stats';
import User from './User';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="column one">
          <User />
          <Stats />
          <Weather />
        </div>
        <div className="column two">  
          <Activities />
        </div>
      </div>
    );
  }
}

export default App;
