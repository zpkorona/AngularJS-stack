/*jshint esversion: 6 */

app.directive("nazwaKomponentuA", function() {
  return {
    template : "color='red'"
    };
});

app.directive("nazwaKomponentuE", function() {
  return {
    template : "<hr />directive::nazwaKomponentuE.tamplate nazwapola =[" + "$scope.nazwaPola" + "]<hr />"
    };
});
