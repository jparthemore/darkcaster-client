//const weatherData = require('../../mocks/weather.json');

WeatherService.$inject = ['$http'];

function WeatherService($http){
  //const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/29,-81';
  const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/';
  return{
    //label      function name
    getCurrentWeather: getCurrently,
    getHourlyWeather: getHourly,
    getMinutelyWeather: getMinutely
  }
  function getCurrently(lat,lon){
    //return weatherData.currently;
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response =>{
                  return response.data.currently;
                })
  }

  function getHourly(lat,lon){
    //return weatherData.hourly;
    //console.log(lat,lon);
    const url = `${baseUrl}${lat},${lon}`;
    return  $http.get(url)
                 .then(resp=>{
                   return resp.data.hourly;
                 })
  }

  function getMinutely(lat,lon){
    console.log(lat,lon);
    const url = `${baseUrl}${lat},${lon}`;
    return  $http.get(url)
                 .then(resp=>{
                   return resp.data.minutely;
                 })
  }


}

module.exports = WeatherService;
