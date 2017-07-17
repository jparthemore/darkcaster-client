/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

MinutelyWeatherController.$inject=['WeatherService','ImageService'];

function MinutelyWeatherController (weather,images){
  //this.weatherMinutely = weatherData.minutely;
  this.lat = 0;
  this.lon = 0;
  this.city = '';
  this.state = '';
  this.zip = '';
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
  this.weatherMinutelyNotAvailable = false;

  this.searchByCoordinates = function searchByCoordinates(){
    weather.getMinutelyWeatherByCoordinates(this.lat,this.lon)
                                  .then(resp=>{
                                    if(resp){
                                      this.weatherMinutely=resp;
                                    }
                                    else{
                                      this.weatherMinutelyNotAvailable='true';
                                    }
                                  });
  };

  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`
    weather.getMinutelyWeatherByLocation(this.lat,this.lon)
                                  .then(resp=>{
                                    if(resp){
                                      this.weatherMinutely=resp;
                                    }
                                    else{
                                      this.weatherMinutelyNotAvailable='true';
                                    }
                                  });
  };
  
}

module.exports = MinutelyWeatherController;
