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

  $(".menu ul li").click(function () {
    $(this).css({"color":"#2828ff","animation":"color 2s","-moz-animation":"color 2s","-webkit-animation":"color 2s"}).siblings().css({"color":"#9d9d9d"});
  });
});