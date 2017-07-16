/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

DailyWeatherController.$inject = ['WeatherService'];

function DailyWeatherController(weather){
  //this.weatherDaily = weatherData.daily;
  this.lat = 29;
  this.lon = -82;

  weather.getDailyWeather(this.lat,this.lon)
         .then(resp=>this.weatherDaily=resp);

}
module.exports = DailyWeatherController;
