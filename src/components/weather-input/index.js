/*jshint esversion: 6*/
const htmlTemplate = require('./weather-input.html');
const inputController = require('./weather-input.controller');

const WeatherInputComponent = {
  template: htmlTemplate,
  controller: inputController,
  bindings:{
    searchbycoordinates: '&',
    searchbylocation: '&',
    //getweatherinput: '&',
    lat: '=',
    lon: '=',
    city: '=',
    state: '=',
    zip: '=',
    chosenweathertype: '='
  }
};

module.exports = WeatherInputComponent;
