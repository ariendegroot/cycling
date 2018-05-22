import React, { Component } from 'react';

const owKey = 'c43e9c7765e78ab5c32ec7553fe8cc61';
const owCity = '2743856';
const owUrl= 'http://api.openweathermap.org/data/2.5/weather?id='+ owCity +'&units=metric&cnt=7&APPID='+owKey;
console.log(owUrl);

class Weather extends Component {
    state = {};
  
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
  
    async componentDidMount() {
  
      const res = await fetch(owUrl)
      const weather = await res.json()
      console.log(weather);
      
      await this.setStateAsync({
          weatherName: weather.name,
          weatherCurrentTemp: Math.round(weather.main.temp),
          weatherIcon:  "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png",
          weatherDescription: weather.weather[0].description
        })
     }
    render() {
      return (
          <div className="weather">
              <h2>The weather</h2>
              {this.state.weatherName}
              {this.state.weatherCurrentTemp}
              <img alt={this.state.weatherDescription} src={this.state.weatherIcon} />
          </div>
      );
    }
  }
  export default Weather;