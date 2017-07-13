/*jshint esversion: 6*/
const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/');//pt to folder thathas index.js in it (w/module.exports)

//create our applicaton
angular.module('darkcaster-client',[])//setter syntax
       .factory('WeatherService',WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
