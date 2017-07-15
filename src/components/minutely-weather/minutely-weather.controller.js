/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

MinutelyWeatherController.$inject=['WeatherService'];

function MinutelyWeatherController (weather){
  //this.weatherMinutely = weatherData.minutely;
  this.lat = 32;
  this.lon = -127;
  weather.getMinutelyWeather(this.lat,this.lon)
                                .then(resp=>this.weatherMinutely=resp);
}

module.exports = MinutelyWeatherController;
