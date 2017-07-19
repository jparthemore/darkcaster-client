/*jshint esversion: 6*/
WeatherInputController.$inject = ['WeatherService'];//controller needs WeatherService

function WeatherInputController(weather){
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
}

module.exports = WeatherInputController;
