/*jshint esversion: 6 */

//app.js
var app = angular.module('nazwaAplikacjiApp', ['ngRoute']);


//rootScope
app.run(function($rootScope) {
  $rootScope.zmiennaGlobalna = "jakaś zmienna globalna - spoza kontrolera";
});
