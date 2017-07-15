/*jshint esversion: 6*/
HourlyWeatherController.$inject = ['WeatherService','ImageService'];//controller needs WeatherService

function HourlyWeatherController(weather,images){
  //this.weatherHourly = weather.getHourlyWeather();
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  this.search = function search(){
   weather.getHourlyWeather(this.lat,this.lon)
          .then(resp =>this.weatherHourly =resp );
  };
}

module.exports = HourlyWeatherController;
