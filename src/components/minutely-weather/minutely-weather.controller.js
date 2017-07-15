/*jshint esversion: 6*/

const weatherData = require('../../../mocks/weather.json');

MinutelyWeatherController.$inject=[];

function MinutelyWeatherController (){
  this.weatherMinutely = weatherData.minutely;
}

module.exports = MinutelyWeatherController;
