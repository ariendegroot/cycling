import React, { Component } from 'react';

const activityDetailUrl = "https://www.strava.com/api/v3/activities/1604487088?include_all_efforts=true&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

  class ActivityDetail extends Component {
    state = {};
  
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
    async componentDidMount() {
  
      const res = await fetch(activityDetailUrl)
      const rideDetail = await res.json()
      console.log(rideDetail);
  
      await this.setStateAsync({
        rideName: rideDetail.name,
        rideDate: rideDetail.start_date_local,
        rideGear: rideDetail.gear.name,
      })
     }
    render() {
      return (
        <div className="card">
          <h2>{this.state.rideName}</h2>
          <div className="ride_date">{this.state.rideDate}</div>
          <div className="ride_gear">{this.state.rideGear}</div>
        </div>
      );
    }
  }
  
  export default ActivityDetail;