/*jshint esversion: 6*/

//const weatherData = require('../../../mocks/weather.json');

MinutelyWeatherController.$inject=['WeatherService','ImageService'];

function MinutelyWeatherController (weather,images){
  //this.weatherMinutely = weatherData.minutely;
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
  this.weatherMinutelyNotAvailable = false;
  this.search = function search(){
    weather.getMinutelyWeather(this.lat,this.lon)
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
