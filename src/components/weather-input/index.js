const htmlTemplate = require('./weather-input.html');
const inputController = require('./weather-input.controller');

const WeatherInputComponent = {
  template: htmlTemplate,
  controller: inputController
};

module.exports = WeatherInputComponent;
