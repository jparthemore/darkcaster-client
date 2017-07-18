/*jshint esversion: 6*/
CurrentWeatherController.$inject = ['WeatherService','ImageService']; //magic for us

function CurrentWeatherController(weather,images){
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  //functions
  this.searchByCoordinates = function searchByCoordinates(){
    weather.getWeatherDataByCoordinates(this.lat,this.lon)
           .then(resp => {
             this.weatherData = resp.currently;
           }); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`
    weather.getWeatherDataByLocation(loc)
           .then(resp => this.weatherData = resp.currently); //is a promise
  };

  //this.weatherData = weather.getCurrentWeather(); //is a promise $$state prmoises take time
  //console.log(this.weatherData);
}

module.exports = CurrentWeatherController;
