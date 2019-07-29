$(document).ready(function () {
  menuToggle();
  windowResize();
  setMenu();
});
function setMenu() {
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
      var bottom_of_object = $(this).offset().top + 10;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $('.menu ul li a').each(function (i) {
          var position = $(this).attr('href');
          if (document.documentElement.scrollTop >= $(position).offset().top) {
            $(".menu ul li a").css({ "color": "#9d9d9d" });
            $(this).css({
              "color": "#343434", "animation": "color 1s",
              "-moz-animation": "color 1s", "-webkit-animation": "color 1s"
            }).siblings().css({ "color": "#9d9d9d" });
          }
        });
        $(this).animate({ 'opacity': '1' }, 1000);
      }
    });
  });
}
function windowResize() {
  $(window).resize(function () {
    var windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth > 1080) {
      $(".hamburger1").css("display", "none");
      $(".hamburger2").css("display", "none");
      // setMenu();
    }
    else {
      $(".hamburger1").css("display", "block");
      $(".hamburger2").css("display", "none");
      $(".rwdMenu").css({ left: "-300px" });
    }
  });
};
function menuToggle() {
  $(".hamburger1").mousedown(function () {
    $(".rwdMenu").animate({ left: "0px" });
    $(".hamburger1").css("display", "none");
    $(".hamburger2").css("display", "block");
  });
  $(".hamburger2").mousedown(function () {
    $(".rwdMenu").animate({ left: "-300px" });
    $(".hamburger2").css("display", "none");
    $(".hamburger1").css("display", "block");
  });
}
//向下滑動的錨點
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.slice(1) != 'top') {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});

//Menu點擊變色動畫
$(".menu ul li a").click(function () {
  $(".menu ul li a").css({ "color": "#9d9d9d" });
  $(this).css({
    "color": "#343434", "animation": "color 2s",
    "-moz-animation": "color 2s", "-webkit-animation": "color 2s"
  }).siblings().css({ "color": "#9d9d9d" });
});

