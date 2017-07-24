/*jshint esversion: 6*/
MainAppController.$inject = ['WeatherService'];

function MainAppController(weather){
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  this.weatherdatareceived = false;
  this.chosenweathertype = 'Currently';
  this.filterOutput = filterOutput;
  this.currently = false;
  this.hourly = false;
  this.minutely = false;
  this.daily = false;

  //functions
  this.searchByCoordinates = function searchByCoordinates(){
    this.filterOutput(this.chosenweathertype);
    /*console.log('weather type is for search  is: ',this.chosenweathertype);
    console.log('lat for search  is: ',this.lat);
    console.log('lon for search  is: ',this.lon);*/

    weather.getWeatherDataByCoordinates(this.lat,this.lon)
           .then(resp => {
             this.weatherdatareceived = true;
             this.weatherData = resp;
           }); //is a promise
  };
  this.searchByLocation = function searchByLocation(){
    this.filterOutput(this.chosenweathertype);
    const loc =  `${this.city}${this.state}${this.zip}`;
    weather.getWeatherDataByLocation(loc)
           .then(resp => this.weatherData = resp); //is a promise
  };
  function filterOutput(weatherType){
    this.currently = false;
    this.minutely = false;
    this.hourly = false;
    this.daily = false;
    switch(weatherType){
       case 'Currently':
         this.currently = true;
         break;
       case 'Minutely':
         this.minutely = true;
         break;
       case 'Hourly':
         this.hourly = true;
         break;
       case 'Daily':
         this.daily = true;
         break;
       case 'All':
         this.currently = true;
         this.minutely = true;
         this.hourly = true;
         this.daily = true;
         break;
       default:
         this.currently = true;
         break;
    }
  //this.currentWeather.addClass('ng-hide');
  }
}

module.exports = MainAppController;
