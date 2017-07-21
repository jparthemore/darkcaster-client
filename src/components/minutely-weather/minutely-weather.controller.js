/*jshint esversion: 6*/
MinutelyWeatherController.$inject=['WeatherService','ImageService'];

function MinutelyWeatherController (weather,images){
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
}

module.exports = MinutelyWeatherController;
