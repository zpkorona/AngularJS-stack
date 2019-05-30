/*jshint esversion: 6 */

//routes
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller : "mainCtrl"
    })
    .when("/strona1", {
        templateUrl : "strona1.html",
        controller : "strona1Ctrl"
    })
    .when("/strona2", {
        templateUrl : "strona2.html",
        controller : "strona2Ctrl"
    })
    .when("/strona3", {
        templateUrl : "strona3.html",
        controller : "strona3Ctrl"
    })
    .when("/strona4", {
        template : "<h5>strona 4 ze zwykłego template</h5>"
    });
});
