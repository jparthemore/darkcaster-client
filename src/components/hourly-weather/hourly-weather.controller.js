/*jshint esversion: 6*/
HourlyWeatherController.$inject = ['ImageService'];//controller needs WeatherService

function HourlyWeatherController(images){
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
}

module.exports = HourlyWeatherController;
