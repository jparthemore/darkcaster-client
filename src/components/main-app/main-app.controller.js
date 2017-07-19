/*jshint esversion: 6*/
MainAppController.$inject = ['WeatherService'];

function MainAppController(weather){
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';

  //functions
  this.searchByCoordinates = function searchByCoordinates(){
    console.log('searching by coords');
    weather.getWeatherDataByCoordinates(this.lat,this.lon)
           .then(resp => {
             this.weatherData = resp.currently;
           }); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    console.log('search by location');
    const loc =  `${this.city}${this.state}${this.zip}`;
    weather.getWeatherDataByLocation(loc)
           .then(resp => this.weatherData = resp.currently); //is a promise
  };
}

module.exports = MainAppController;
