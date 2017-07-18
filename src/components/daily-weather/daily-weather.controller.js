/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

DailyWeatherController.$inject = ['WeatherService','ImageService'];

function DailyWeatherController(weather,images){
  //this.weatherDaily = weatherData.daily;
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  // this.search = function search(){
  //   weather.getDailyWeather(this.lat,this.lon)
  //          .then(resp=>this.weatherDaily=resp);
  // };
  this.searchByCoordinates = function searchByCoordinates(){
    weather.getDailyWeatherByCoordinates(this.lat,this.lon)
           .then(resp => this.weatherDaily = resp); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`
    weather.getDailyWeatherByLocation(loc)
           .then(resp => this.weatherDaily = resp); //is a promise
  };

}
module.exports = DailyWeatherController;
