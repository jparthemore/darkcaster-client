/*jshint esversion: 6*/
WeatherInputController.$inject = ['WeatherService'];//controller needs WeatherService

function WeatherInputController(weather){
  /*this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';*/
  this.weatherinputtypes =['Current','Hourly','By the Minute','Daily','All'];
  this.weatherinput = this.weatherinputtypes[0];
  this.chosenweathertype = '';

  this.onChange = function onChange(){
    this.chosenweathertype = this.weatherinput;
  };
}

module.exports = WeatherInputController;
