import React, { Component } from 'react';
let totalDistance = 0;
stravaUrl = "#";
class Activities extends Component {
    constructor() {
      super();
      this.state = {
        activities: [],
      };
    }
  
  componentDidMount() { 
  
    fetch(stravaUrl)
    .then(results => {
        return results.json();
    }).then(data => {
        let activities = data.map((activity) => {
            let rideName = activity.name.toLowerCase();
            let rideDistance = Math.round(activity.distance / 100) / 10;
            
            totalDistance = totalDistance + rideDistance;     
        return (
          <div key={rideName}>
            <h2>{rideName}</h2>
            <h3>{activity.start_date}</h3>
            <span>Distance: {rideDistance} KM</span>
          </div>
        )
      })
      this.setState({activities: activities});
    })
  }
    render() {
      return (
        <div className="Activities">
          <h1>Here comes the latest activities!</h1>
          {totalDistance}
          {this.state.activities}
        </div>
      );
    }
  }

  export default Activities;
