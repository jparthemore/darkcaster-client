/*jshint esversion: 6*/
MainAppController.$inject = ['WeatherService'];

function MainAppController(weather){
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  //this.weatherdataavailable = true;

  //functions
  this.searchByCoordinates = function searchByCoordinates(){
    weather.getWeatherDataByCoordinates(this.lat,this.lon)
           .then(resp => {
             this.weatherData = resp;
           }); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`;
    weather.getWeatherDataByLocation(loc)
           .then(resp => this.weatherData = resp); //is a promise
  };
}

module.exports = MainAppController;
