$(document).ready(function () {
  var def_menu = $(".menu").offset().top;
  var scroll = false;
  $(document).scroll(function () {
    if (document.documentElement.scrollTop >= def_menu) {
      if (!scroll) {
        $(".menu").css({ "position": "fixed", "top": "0px" });
        scroll = true;
      }
    } else if (document.documentElement.scrollTop < def_menu) {
      if (scroll) {
        $(".menu").css({ "position": "relative" });
        scroll = false;
      }
    }
  });
});

//向下滑動的錨點
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.slice(1) != 'top') {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Menu點擊變色動畫
$(".menu ul li a").click(function () {
  $(".menu ul li a").css({"color": "#9d9d9d"});
  $(this).css({
    "color": "#2828ff", "animation": "color 2s",
    "-moz-animation": "color 2s", "-webkit-animation": "color 2s"
  }).siblings().css({ "color": "#9d9d9d" });
});

