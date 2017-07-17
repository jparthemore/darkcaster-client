/*jshint esversion: 6*/
CurrentWeatherController.$inject = ['WeatherService','ImageService'];
const inputWeather= require('../weather-input/weather-input.controller');


function CurrentWeatherController(weather,images){
  this.junk = inputWeather;
  console.log('junk is: ',this.junk);
  //console.log(this.junk.lat);
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  //functions
  this.search = function search(){
    console.log('junk is now: ',this.junk);
    weather.getCurrentWeather(this.lat,this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

  //this.weatherData = weather.getCurrentWeather(); //is a promise $$state prmoises take time
  //console.log(this.weatherData);
}

module.exports = CurrentWeatherController;
