/*jshint esversion: 6*/
const htmlTemplate = require('./minutely-weather.html');
const minutelyWeatherController = require('./minutely-weather.controller');

const MinutelyWeatherComponent = {
  template: htmlTemplate,
  controller: minutelyWeatherController
};

module.exports = MinutelyWeatherComponent;
