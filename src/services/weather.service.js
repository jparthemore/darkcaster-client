/*jshint esversion: 6*/

//const weatherData = require('../../mocks/weather.json');

WeatherService.$inject = ['$http'];

function WeatherService($http){
  //const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/29,-81';
  const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/';
  return{
    //label      function name
    getCurrentlyWeatherByCoordinates: getCurrentlyByCoordinates,
    getCurrentlyWeatherByLocation: getCurrentlyByLocation,
    getHourlyWeatherByCoordinates: getHourlyByCoordinates,
    getHourlyWeatherByLocation: getHourlyByLocation,
    getMinutelyWeatherByCoordinates: getMinutelyByCoordinates,
    getMinutelyWeatherByLocation: getMinutelyByLocation,
    getDailyWeatherByCoordinates: getDailyByCoordinates,
    getDailyWeatherByLocation: getDailyByLocation
  };
  function getCurrentlyByCoordinates(lat,lon){
    //return weatherData.currently;
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response =>{
                  return response.data.currently;
                });
  }
  function getCurrentlyByLocation(location){
    //return weatherData.currently;
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                 .then(response =>{
                   return response.data.currently;
                 });
  }
  function getHourlyByCoordinates(lat,lon){
    //return weatherData.hourly;
    const url = `${baseUrl}${lat},${lon}`;
    return  $http.get(url)
                 .then(resp=>{
                   return resp.data.hourly;
                 });
  }
  function getHourlyByLocation(location){
    //return weatherData.currently;
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                 .then(response =>{
                   return response.data.hourly;
                 });
  }
  function getMinutelyByCoordinates(lat,lon){
    const url = `${baseUrl}${lat},${lon}`;
    return  $http.get(url)
                 .then(resp=>{
                   return resp.data.minutely;
                 });
  }
  function getMinutelyByLocation(location){
    //return weatherData.currently;
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                 .then(response =>{
                   return response.data.minutely;
                 });
  }
  function getDailyByCoordinates(lat,lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(resp=>{
                  return resp.data.daily;
                });
  }
  function getDailyByLocation(location){
    //return weatherData.currently;
    const url = `${baseUrl}location/${location}`;
    return $http.get(url)
                 .then(response =>{
                   return response.data.daily;
                 });
  }

}

module.exports = WeatherService;
