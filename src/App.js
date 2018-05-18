import React, { Component } from 'react';
import './App.css';
import Activities from './Activities';

// https://www.strava.com/api/v3/athlete/activities?per_page=10&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a

class App extends Component {
  render() {
    return (
      <div className="App">
        <Activities />
      </div>
    );
  }
}

export default App;
