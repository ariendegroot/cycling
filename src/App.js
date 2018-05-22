import React, { Component } from 'react';
import './App.css';
import Activities from './Activities';
import Stats from './Stats';
import User from './User';
import Weather from './Weather';

// https://www.strava.com/api/v3/athlete/activities?per_page=10&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="column">
          <User />
          <Stats />
          <Activities />
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
