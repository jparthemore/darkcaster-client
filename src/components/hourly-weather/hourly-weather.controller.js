/*jshint esversion: 6*/
HourlyWeatherController.$inject = ['WeatherService','ImageService'];//controller needs WeatherService

function HourlyWeatherController(weather,images){
  //this.weatherHourly = weather.getHourlyWeather();
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;

  // this.search = function search(){
  //  weather.getHourlyWeather(this.lat,this.lon)
  //         .then(resp =>this.weatherHourly =resp );
  // };
  this.searchByCoordinates = function searchByCoordinates(){
    weather.getWeatherDataByCoordinates(this.lat,this.lon)
           .then(resp => this.weatherHourly = resp.hourly); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`;
    weather.getWeatherDataByLocation(loc)
           .then(resp => this.weatherHourly = resp.hourly); //is a promise
  };
}

module.exports = HourlyWeatherController;
