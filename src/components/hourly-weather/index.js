/*jshint esversion: 6*/
const htmlTemplate = require('./hourly-weather.html');
const hourlyController = require('./hourly-weather.controller');

const HourlyWeatherComponent = {
  template: htmlTemplate,
  controller: hourlyController,
  bindings: {
    weather: '<'
  }
};

module.exports = HourlyWeatherComponent;
