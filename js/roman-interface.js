var Roman = require('./../js/roman.js').romanModule;

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#decNum").val();
    var roman = new Roman("red");
    var output = roman.toRoman(input);
    $("#result").text(output);
  });
});
