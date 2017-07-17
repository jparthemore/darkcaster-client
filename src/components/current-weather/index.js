const htmlTemplate = require('./current-weather.html');
const currentController = require('./current-weather.controller');

const CurrentWeatherComponent = {
  template: htmlTemplate,
  controller: currentController,
};

module.exports = CurrentWeatherComponent;
