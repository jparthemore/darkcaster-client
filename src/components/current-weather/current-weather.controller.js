/*jshint esversion: 6*/
CurrentWeatherController.$inject = ['WeatherService','ImageService']; //magic for us

function CurrentWeatherController(weather,images){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat,this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

  //this.weatherData = weather.getCurrentWeather(); //is a promise $$state prmoises take time
  //console.log(this.weatherData);
}

module.exports = CurrentWeatherController;
