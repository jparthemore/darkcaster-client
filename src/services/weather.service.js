/*jshint esversion: 6*/

//const weatherData = require('../../mocks/weather.json');

WeatherService.$inject = ['$http'];

function WeatherService($http){
  //const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/29,-81';
  const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/';
  return{
    //label      function name
    getWeatherDataByCoordinates: getWeatherByCoordinates,
    getWeatherDataByLocation: getWeatherByLocation,
  };
  function getWeatherByCoordinates(lat,lon){
    //return weatherData;
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response =>{
                  return response.data;
                });
  }
  function getWeatherByLocation(location){
    //return weatherData;
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                 .then(response =>{
                   return response.data;
                 });
  }

}

module.exports = WeatherService;
