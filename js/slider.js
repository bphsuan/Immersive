var total = $('.header ul li').length;
var current = 1;
var windows_width = window.innerWidth;
var windows_height = window.innerHeight;
$(document).ready(function () {
  $('.header ul').css({ "width": windows_width * 3 + "px" });
  $(window).resize(function () {
    windows_width = window.innerWidth;
    $('.header ul').removeAttr("style");
    $('.header ul').css({ "width": windows_width * 3 + "px" });
    current = 1;
  });
  displaypic(current);
});

function displaypic(pic) {
  if (current < total) {
    var left = $('.slider_header').css("margin-left");
    $('.slider_header').animate({ "margin-left": parseInt(left) - windows_width }, 6000);
    current = current + 1;
    setTimeout(function () { displaypic(current) }, 6000);
  } else {
    $('.slider_header').animate({ "margin-left": 0 + "px" }, 6000);
    current = 1;
    setTimeout(function () { displaypic(current) }, 6000);
  }

}