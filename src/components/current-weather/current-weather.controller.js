const clearDay = require('../../images/clear-day.png');
//const missingImage = require('../../images/missing.png');
MainController.$inject = ['WeatherService']; //magic for us

function MainController(weather){
  // console.log(weather);
  this.message = 'hello from angular';
  this.imageLookup = {
    'clear-day': clearDay
  };
  //this.missingImage = missingImage;
  //this.weatherData = weather.getCurrentWeather(); //is a promise $$state prmoises take time
  weather.getCurrentWeather(29,-81)
         .then(currentWeather => this.weatherData = currentWeather); //is a promise

  //console.log(this.weatherData);
}

module.exports = MainController;
