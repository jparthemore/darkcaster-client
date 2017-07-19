/*jshint esversion: 6*/
const htmlTemplate = require('./weather-input.html');
const inputController = require('./weather-input.controller');

const WeatherInputComponent = {
  template: htmlTemplate,
  controller: inputController,
  bindings:{
    searchByCoordinates: '&',
    searchByLocation: '&'
  }
};

module.exports = WeatherInputComponent;
