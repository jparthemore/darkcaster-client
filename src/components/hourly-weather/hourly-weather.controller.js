/*jshint esversion: 6*/
const clearDay = require('../../images/clear-day.png');
const clearNight = require('../../images/clear-night.png');
const cloudy = require('../../images/cloudy.png');
const fog = require('../../images/fog.png');
const partlyCloudyDay = require('../../images/partly-cloudy-day.png');
const partlyCloudyNight = require('../../images/partly-cloudy-night.png');
const rain = require('../../images/rain.png');
const sleet = require('../../images/sleet.png');
const snow = require('../../images/snow.png');
const wind = require('../../images/wind.png');
const missingImage = require('../../images/weather.png');


HourlyWeatherController.$inject = ['WeatherService'];//controller needs WeatherService

function HourlyWeatherController(weather){
  //this.weatherHourly = weather.getHourlyWeather();
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
   'clear-day': clearDay,
   'clear-night': clearNight,
   'cloudy' : cloudy,
   'fog' : fog,
   'partly-cloudy-day' : partlyCloudyDay,
   'partly-cloudy-night' : partlyCloudyNight,
   'rain': rain,
   'sleet': sleet,
   'snow' : snow,
   'wind' :wind
 };
 this.missingImage = missingImage;

 this.search = function search(){
   weather.getHourlyWeather(this.lat,this.lon)
          .then(resp =>this.weatherHourly =resp );
 };
 //this.search();

}

module.exports = HourlyWeatherController;
