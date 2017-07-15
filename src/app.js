/*jshint esversion: 6*/
const angular = require('angular');
//const weatherData = require('../mocks/weather.json');

require('./app.css');

//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/images.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/');//pt to folder thathas index.js in it (w/module.exports)
const HourlyWeatherComponent = require('./components/hourly-weather/');

//create our applicaton
angular.module('darkcaster-client',[])//setter syntax
       .factory('WeatherService',WeatherService)
       .factory('ImageService',ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather',HourlyWeatherComponent);
