$(document).ready(function () {
  var def_menu = $(".menu").offset().top;
  var scroll = false;
  $(window).scroll(function () {
    //往下滑動後固定左側menu
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
    //滑到文章才顯示動畫
    $('.topic_content').each(function (i) {
      var bottom_of_object = $(this).offset().top+10;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 2000);
        
      }
    });
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
  $(".menu ul li a").css({ "color": "#9d9d9d" });
  $(this).css({
    "color": "#2828ff", "animation": "color 2s",
    "-moz-animation": "color 2s", "-webkit-animation": "color 2s"
  }).siblings().css({ "color": "#9d9d9d" });
});

