const weatherData = require('../../mocks/weather.json');

WeatherService.$inject = []; //currenty angular needs no tools for this service

function WeatherService(){
  return{
    //label      function name
    getCurrentWeather: getCurrently
  }
  function getCurrently(){
    return weatherData.currently;
  }
}

module.exports = WeatherService;
