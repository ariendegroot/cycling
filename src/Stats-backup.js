import React, { Component } from 'react';
let statsUrl = "https://www.strava.com/api/v3/athletes/8237083/stats?&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";


class Stats extends Component {
  constructor() {
    super();
    this.state = {
      stats: [],
    };
  }e

componentDidMount() { 

  fetch(statsUrl)
  .then(results => {
      return results.json();
  }).then(data => {
    console.log(data);
    const stats = data;
        console.log(stats.biggest_ride_distance);
      return (
        <div>
          <h2>Test</h2>
        </div>
      )
      setInterval(function(){ 
        this.setState({stats: stats}); 
      },500);
  })
}
  render() {
    return (
      <div className="Activities">
        <h1>Here comes the latest stats!</h1>
        {this.state.stats}
      </div>
    );
  }
}

export default Stats;

