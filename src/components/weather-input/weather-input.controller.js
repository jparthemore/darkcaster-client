/*jshint esversion: 6*/
WeatherInputController.$inject = [];
//const currentWeather= require('./../current-weather/current-weather.controller');

function WeatherInputController(){
  this.lat = 0;
  this.lon = 0;

  this.latitude = function getLatitude(){
     //console.log('latitude is: ', this.lat);
     return this.lat;
   };
  //console.log(currentWeather);

  //functions
  this.search = function search(){
    console.log('thisLatitude is: ',this.latitude());
    console.log(this.lat,this.lon);
    //console.log(currentWeather.search());
    //currentWeather.search(this.lat,this.lon);
  }

  /*this.search = function search(){
    //console.log('haha');
    console.log(this.lat, this.lon);
  };*/

}

module.exports = WeatherInputController;
