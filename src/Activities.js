import React, { Component } from 'react';
let totalDistance = 0;
let activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";
class Activities extends Component {
    constructor() {
      super();
      this.state = {
        activities: [],
      };
    }e
  
  componentDidMount() { 
  
    fetch(activitiesUrl)
    .then(results => {
        return results.json();
    }).then(data => {
        let activities = data.map((activity) => {
            let rideName = activity.name;
            let rideDistance = Math.round(activity.distance / 100) / 10;
            
            totalDistance = totalDistance + rideDistance;     
        return (
          <div key={rideName + activity.start_date}>
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
          {this.state.activities}
        </div>
      );
    }
  }

  export default Activities;
