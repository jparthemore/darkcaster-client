/*jshint esversion: 6*/
const angular = require('angular');

require('./app.css');

//services
const WeatherService = require('./services/weather.service');
const ImageService = require('./services/images.service');

//components
//pt to folder thathas index.js in it (w/module.exports)
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');
const MinutelyWeatherComponent = require('./components/minutely-weather/');

//create our applicaton
//string for components must match index.html - except CamelCase for JS
//here register for angular all components and  services
angular.module('darkcaster-client',[])//setter syntax
       .factory('WeatherService',WeatherService)
       .factory('ImageService',ImageService)
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather',HourlyWeatherComponent)
       .component('minutelyWeather',MinutelyWeatherComponent);
