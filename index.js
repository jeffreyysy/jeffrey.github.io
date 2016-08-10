$(document).ready(function() {
var movementStrength = 45;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("section.module.parallax-1").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 100;
          var newvalueY = height * pageY * -1 - 25;
          $('section.module.parallax-1').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
