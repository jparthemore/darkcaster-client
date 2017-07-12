MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  // console.log(weather);
  this.message = 'hello from angular';
  this.weatherData = weather.getCurrentWeather();
}

module.exports = MainController;
