var jsImg = new Array("./assets/turtle02.jpg", "./assets/turtle01.jpg", "./assets/turtle03.png", "./assets/turtle04.png");
var jsImg_len = jsImg.length;
var i = 0;
window.onload = function () {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
}

setInterval("turtleImg()", 1500);
function turtleImg() {
  document.getElementById("turtlePic").innerHTML = "<img src='" + jsImg[i] + "' width=100%'>";
  $("#turtlePic img").fadeIn(1000);
  i++;
  if (i >= jsImg_len) i = 0;
}