/*jshint esversion: 6*/
ImageService.$inject = [];

const clearDay = require('../images/clear-day.png');
const clearNight = require('../images/clear-night.png');
const partlyCloudyDay = require('../images/partly-cloudy-day.png');
const partlyCloudyNight = require('../images/partly-cloudy-night.png');
const cloudy = require('../images/cloudy.png');
const rain = require('../images/rain.png');
const snow =  require('../images/snow.png');
const sleet = require('../images/sleet.png');
const wind =  require('../images/wind.png');
const fog =  require('../images/fog.png');
const genericWeatherImage = require('../images/weather.png'); //use this as default for missing icon

function ImageService(){
  const imagesToLookUp ={
     'clear-day': clearDay,
     'clear-night': clearNight,
     'cloudy' : cloudy,
     'fog' : fog,
     'partly-cloudy-day' : partlyCloudyDay,
     'partly-cloudy-night' : partlyCloudyNight,
     'rain': rain,
     'sleet': sleet,
     'snow' : snow,
     'wind' :wind
   };
  return {
    imageLookup: imagesToLookUp,
    missingImage: genericWeatherImage
  };
}

module.exports = ImageService;
