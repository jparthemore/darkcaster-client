/*jshint esversion: 6*/

const weatherData = require('../../../mocks/weather.json');

DailyWeatherController.$inject = [];

function DailyWeatherController(){
  this.weatherDaily = weatherData.daily;

}
module.exports = DailyWeatherController;
