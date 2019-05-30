/*jshint esversion: 6 */

//custom filter
app.filter('nazwaFiltra', function() {
  return function(text) {
    let txt = "";
    for (let i = 0; i < text.length; i++) {
      txt += text[text.length-1-i];
    }//for
    return txt;
  };
});
