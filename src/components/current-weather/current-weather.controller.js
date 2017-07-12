const clearDay = require('../../images/clear-day.png');
MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  // console.log(weather);
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  };
  this.weatherData = weather.getCurrentWeather();
}

module.exports = MainController;
