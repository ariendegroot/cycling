import React, { Component } from 'react';
let statsUrl = "https://www.strava.com/api/v3/athletes/8237083/stats?&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

class Stats extends Component {
  state = {};

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {

    const res = await fetch(statsUrl)
    const stats = await res.json()
    console.log(stats);

    await this.setStateAsync({
      yearTotal: Math.round(stats.ytd_ride_totals.distance / 100) / 10,
      yearRides: stats.ytd_ride_totals.count,
    })
   }
  render() {
    return (
      <div className="card">
        <h2>This year so far</h2>
        <div className="total_rides">{this.state.yearRides} rides</div>
        <div className="total_km">{this.state.yearTotal} km</div>
      </div>
    );
  }
}

export default Stats;
