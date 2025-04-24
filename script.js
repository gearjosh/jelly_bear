function switchHeader() {
  if ($(window).scrollTop() >= 208) {
    $("#smallLogo").show();
  } else {
    $("#smallLogo").hide();
  }
}

$(window).scroll(switchHeader);

switchHeader();
