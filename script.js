// Utility Functions

function switchHeader() {
  if ($(window).scrollTop() >= 208) {
    $("#smallLogo").show();
  } else {
    $("#smallLogo").hide();
  }
}

// Event Listeners

$(window).scroll(switchHeader);

switchHeader();