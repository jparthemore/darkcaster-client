/*jshint esversion: 6*/
const angular = require('angular');

//services
const WeatherService = require('./services/weather.service');

//components
const CurrentWeatherComponent = require('./components/current-weather/index');

//create our applicaton
angular.module('darkcaster-client',[]);//setter syntax

angular.module('darkcaster-client') //getter syntax - angular version of require
       .factory('WeatherService',WeatherService)
       .component('currentWeather', CurrentWeatherComponent);
