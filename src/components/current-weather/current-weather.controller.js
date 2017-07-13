const clearDay = require('../../images/clear-day.png');
const clearNight = require('../../images/clear-night.png');
const partlyCloudyDay = require('../../images/partly-cloudy-day.png');
const partlyCloudyNight = require('../../images/partly-cloudy-night.png');
const cloudy = require('../../images/cloudy.png');
const rain = require('../../images/rain.png');
const snow =  require('../../images/snow.png');
const sleet = require('../../images/sleet.png');
const wind =  require('../../images/wind.png');
const fog =  require('../../images/fog.png');
const missingImage = require('../../images/weather.png'); //use this as default for missing icon image

CurrentWeatherController.$inject = ['WeatherService']; //magic for us

function CurrentWeatherController(weather){
  this.lat = 0;
  this.lon = 0;
  this.imageLookup = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    'partly-cloudy-day' : partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight,
    'cloudy': cloudy,
    'rain' :rain,
    'snow' :snow,
    'sleet': sleet,
    'wind': wind,
    'fog' : fog
  };
  this.missingImage = missingImage;

  //functions
  this.search = function search(){
    weather.getCurrentWeather(this.lat,this.lon)
           .then(currentWeather => this.weatherData = currentWeather); //is a promise
  };

  //this.weatherData = weather.getCurrentWeather(); //is a promise $$state prmoises take time


  //console.log(this.weatherData);
}

module.exports = CurrentWeatherController;
