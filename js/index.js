$(document).ready(function () {
  var player = document.getElementById('bgMusic');

  player.addEventListener('canplaythrough', function () {
    player.play();
  }, false);
  $(".loading").delay("2500").fadeOut("slow");
  dataToggle();
  window.onload = function () {
    $('html,body').animate({ scrollTop: 0 }, 1500);
    if ($(document).scrollTop() !== undefined) {
      $('#bgMusic')[0].play();
    }
  }

  $('#logo_refresh').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 1500);
  });

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
