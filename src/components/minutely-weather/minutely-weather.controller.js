/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

MinutelyWeatherController.$inject=['WeatherService','ImageService'];

function MinutelyWeatherController (weather,images){
  //this.weatherMinutely = weatherData.minutely;
  this.lat = 32;
  this.lon = -127;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
  weather.getMinutelyWeather(this.lat,this.lon)
                                .then(resp=>this.weatherMinutely=resp);
}

module.exports = MinutelyWeatherController;
