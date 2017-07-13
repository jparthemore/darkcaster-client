const weatherData = require('../../mocks/weather.json');

WeatherService.$inject = ['$http']; //currenty angular needs no tools for this service

function WeatherService($http){
  //const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/29,-81';
  const baseUrl = 'https://guarded-caverns-14178.herokuapp.com/weather/';
  return{
    //label      function name
    getCurrentWeather: getCurrently
  }
  function getCurrently(lat,lon){
    //return weatherData.currently;
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(baseUrl)
                .then(response =>{
                  //console.log(response);
                  return response.data.currently;
                })
  }
}

module.exports = WeatherService;
