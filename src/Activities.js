import React, { Component } from 'react';

const activitiesUrl = "https://www.strava.com/api/v3/athlete/activities?per_page=5&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

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
            let rideDate = new Date(activity.start_date);
            let dateOptions = { weekday: undefined, year: undefined, month: 'long', day: 'numeric' };
            let rideDay = rideDate.toLocaleDateString('nl-NL', dateOptions );
            let rideUrl = "https://www.strava.com/activities/" + activity.id;
        return (
          <div class="activity" key={ rideName + activity.start_date }>
            <a href={ rideUrl }>{ rideDay + " " + rideName }</a>
            <div className="icons-container">
              <span className="icon">{ Math.round(activity.distance / 100) / 10 }</span>
              <span className="icon">{ Math.round(rideAvg) }</span>
              <span className="icon">{ activity.kudos_count }</span>
            </div>
          </div>
        )
      })
      this.setState( {activities: activities });
    })
  }
    render() {
      return (
        <div className="Activities">
          <h2>Recent rides</h2>
          { this.state.activities }
        </div>
      );
    }
  }

  export default Activities;
