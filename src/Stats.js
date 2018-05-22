import React, { Component } from 'react';
let statsUrl = "https://www.strava.com/api/v3/athletes/8237083/stats?&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

let yearTotal = "";
let yearRides = 0;

class Stats extends Component {
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  async componentDidMount() {

    const res = await fetch(statsUrl)
    const stats = await res.json()
    console.log(stats);
    yearTotal = stats.biggest_ride_distance;
    yearRides = stats.ytd_ride_totals.count;
    await this.setStateAsync({stats: stats})
   }
  render() {
    return (
      <div>
        <h2>Aantal ritten: {yearRides}</h2>
        <h2>Totaal aantal KM: {yearTotal}</h2>
        </div>
    );
  }
}
export default Stats;

