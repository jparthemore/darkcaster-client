/*jshint esversion: 6*/
CurrentWeatherController.$inject = ['ImageService']; //magic for us

function CurrentWeatherController(images){
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
}

module.exports = CurrentWeatherController;
