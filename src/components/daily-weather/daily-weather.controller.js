/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

DailyWeatherController.$inject = ['WeatherService','ImageService'];

function DailyWeatherController(weather,images){
  //this.weatherDaily = weatherData.daily;
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  this.search = function search(){
    weather.getDailyWeather(this.lat,this.lon)
           .then(resp=>this.weatherDaily=resp);
  };

}
module.exports = DailyWeatherController;
