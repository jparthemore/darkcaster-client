/*jshint esversion: 6*/

DailyWeatherController.$inject = ['ImageService'];

function DailyWeatherController(images){
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
}
module.exports = DailyWeatherController;
