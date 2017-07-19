/*jshint esversion: 6*/
const htmlTemplate = require('./main-app.html');
const appController = require('./main-app.controller');

const MainAppComponent = {
  template: htmlTemplate,
  controller: appController
};

module.exports = MainAppComponent;
