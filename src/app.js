// require('./app.css');
// console.log('It works');
const angular = require('angular');

//console.log(angular);

//create our applicaton
const app = angular.module('darkcaster-client',[]);//setter syntax

app.controller('MainController', MainController);
MainController.$inject = ['$scope']; //magic for us

function MainController($scope){
  $scope.message = 'hello from angular';
  const crowbar = 'hellow from angular again';
}
