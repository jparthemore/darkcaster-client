/*jshint esversion: 6*/
const htmlTemplate = require('./daily-weather.html');
const dailyWeatherController = require('./daily-weather.controller');

const dailyWeatherComponent = {
  template: htmlTemplate,
  controller: dailyWeatherController
};

module.exports = dailyWeatherComponent;
