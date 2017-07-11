// require('./app.css');
// console.log('It works');
const angular = require('angular');
const weatherData = require('../mocks/weather.json');

//window.weatherData = weatherData; //window is browser window

//console.log(angular);

//create our applicaton
angular.module('darkcaster-client',[]);//setter syntax

angular.module('darkcaster-client') //getter syntax - angular version of require
        .controller('MainController', MainController);

MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';
  // const crowbar = 'hellow from angular again';
  this.weatherData = weatherData.currently;
}
