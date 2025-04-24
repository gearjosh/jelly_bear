$(window).scroll(function() {
  if ($(window).scrollTop() >= 208) {
    $("#smallLogo").show();
  } else {
    $("#smallLogo").hide();
  }
})