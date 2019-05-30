/*jshint esversion: 6 */

//nazwaKontrolera.module.js
app.controller('nazwaKontroleraCtrl', ['$scope',
                                       '$http',
                                       '$location',
                                       '$interval',
                                       '$timeout',
                                       '$log',
                                       '$window',
                                       function ($scope, $http, $location, $interval, $timeout, $log, $window) {
  $scope.nazwaPola = "nazwaPola";
  $scope.nazwaPola1 = "nazwaPola1";
  $scope.nazwaPola2 = "nazwaPola2";
  $scope.fibonums = [];
  let i;
  for (i = 0; i <= 20; i++) {
    if (i < 2) {
      $scope.fibonums[i] = i;
    } else if (i == 2) {
      $scope.fibonums[i] = 1;
    } else {
      $scope.fibonums[i] = $scope.fibonums[i-1] + $scope.fibonums[i-2];
    }
  }
  $scope.miasta = [
    {nazwa:"Warszawa", mieszk:1765},
    {nazwa:"Łódź", mieszk:694},
    {nazwa:"Rzeszów", mieszk:183},
    {nazwa:"Poznań", mieszk:551},
    {nazwa:"Gdańsk", mieszk:582},
    {nazwa:"Katowice", mieszk:302},
    {nazwa:"Szczecin", mieszk:404},
    {nazwa:"Kraków", mieszk:767}
    ];
  $scope.zwierza = {
        henio : {typ : "hipcio", waga : "ciężka", kolor : "szary"},
        zuzia : {typ : "zebzia", waga : "10kg", kolor : "paskata"},
        mania : {typ : "mucha", waga : "szalkowa", kolor : "czarna"}
    };
  $scope.dscFile = "dscFile jeszcze nie wczytany";
  $scope.dscFileDscr = "";
  $scope.dscFileTab = [];
  $scope.statusCode = "statusCode nie wczytany";
  $scope.statusText = "statusText nie wczytany";

  $scope.getDscFile = function () {
    $http({
      method : "GET",
      url : "1760s-dsc.json",
      responseType: "json"
    }).then(function(response) {
        $scope.dscFile = response.data;
        for (let key in $scope.dscFile) {
          for (let kkey in $scope.dscFile[key]) {
            $scope.dscFileDscr += $scope.dscFile[key][kkey] + ", ";
          }//for
        }//for
        $scope.dscFileTab = response.data;
        $scope.statusCode = response.status;
        $scope.statusText = response.statusText;
      }, function(response) {
        $scope.statusText = response.statusText;
      });
  };

  $scope.absUrl = $location.absUrl();
  $scope.url = $location.url();
  $scope.protocol = $location.protocol();
  $scope.host = $location.host();
  $scope.port = $location.port();
  $scope.path = $location.path();
  $scope.searchObject = $location.search();
  $scope.hash = $location.hash();

  $scope.counter = 0;
  $scope.intervalStarted = false;
  $scope.startInterval = function () {
    $scope.counter = 0;
    if (!$scope.intervalStarted) {
      $interval(() => {$scope.counter++;}, 1000);
      $scope.intervalStarted = true;
    }//if
  };//startInterval

  $scope.teaout = "tea";
  $scope.teaoutCnt = 0;
  $scope.startTimeout = function () {
    if ($scope.teaoutCnt++) {
      $scope.teaout = "tea ";
    }//if
    $timeout(() => {$scope.teaout += " out";}, 10000);
  };//startTimeout

  $scope.sendLogs = function () {
    $log.log("komentarz przez $log.log");
    $log.error("błąd przez $log.error");
    $log.info("informacja przez $log.info");
    $log.warn("ostrzeżenie przez $log.warn");
    $log.debug("śledzik przez $log.debug");
  };//sendLogs

  $scope.sendAlert = function (text) {
    $window.alert(text);
  };//sendAlert

  $scope.sendPrompt = function (text) {
    $window.prompt(text);
  };//sendAlert

  $scope.getURL = function () {
    return $location.absUrl();
  };//getURL
  $scope.poleTekstoweAkuku = "pole tekstowe Akuku";

}]);//controller

app.controller("mainCtrl", function ($scope, $location) {
  $scope.mainPole = "Ta jest strona main.html";
  $scope.absUrl = $location.absUrl();
});

app.controller("strona1Ctrl", function ($scope, $location) {
  $scope.strona1Pole = "Ta jest strona strona1.html";
  $scope.absUrl = $location.absUrl();
});

app.controller("strona2Ctrl", function ($scope, $location) {
  $scope.strona2Pole = "Ta jest strona strona2.html";
  $scope.absUrl = $location.absUrl();
});

app.controller("strona3Ctrl", function ($scope, $location) {
  $scope.strona3Pole = "Ta jest strona strona3.html";
  $scope.absUrl = $location.absUrl();
});
