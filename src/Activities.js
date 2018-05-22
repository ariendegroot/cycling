import React, { Component } from 'react';

const activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?per_page=1&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

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
        console.log(activity);
            let rideName = activity.name;
            let rideAvg = activity.average_speed * 3.6000000;
        return (
          <div key={rideName + activity.start_date}>
            <h2>{rideName}</h2>
            <h3>{activity.start_date}</h3>
            <div>Distance: {Math.round(activity.distance / 100) / 10} KM</div>
            <div>Average: {(rideAvg * 100) / 100  }</div>
          </div>
        )
      })
      this.setState({activities: activities});
    })
  }
    render() {
      return (
        <div className="Activities">
          <h2>5 latest activities</h2>
          {this.state.activities}
        </div>
      );
    }
  }

  export default Activities;
