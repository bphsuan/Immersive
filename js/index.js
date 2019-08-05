$(document).ready(function () {
  $(".loading").delay("slow").fadeOut("slow");
  dataToggle();
  window.onload = function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }
  var partialView = $('#partial-view').partialViewSlider();

  $('#prev').on('click', function () {
    partialView.prev();
  });
  $('#next').on('click', function () {
    partialView.next();
  });
  $('#play').on('click', function () {
    partialView.play();
  });
  $('#pause').on('click', function () {
    partialView.pause();
  });
});
function dataToggle() {
  $(".dataApear").click(function () {
    $(".dataHide").css("display", "block");
    $(".dataApear").css("display", "none");
    $(".dataDispear").css("display", "block");
    console.log("apear");
  })
  $(".dataDispear").click(function () {
    $(".dataHide").css("display", "none");
    $(".dataDispear").css("display", "none");
    $(".dataApear").css("display", "block");
    console.log("dispear");
  })
}
