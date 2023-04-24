let w = innerWidth;

function showModal() {
  $("#backdrop").removeClass("hide");
  $("#overlay").removeClass("hide");
  $("body").addClass("prevent-scroll");
  $("#closeSVG").removeClass("hide");
  $("#hamburgerSVG").addClass("hide");
}

function hideModal() {
  $("#backdrop").addClass("hide");
  $("#overlay").addClass("hide");
  $("body").removeClass("prevent-scroll");
  $("#closeSVG").addClass("hide");
  $("#hamburgerSVG").removeClass("hide");
}

if (w <= 768) {
  $("#hamburgerSVG").removeClass("hide");
  $("#navigationDesktop").addClass("hide");
  $("#hero-img").addClass("hero-img-mobile");
} else {
  $("#hero-img").addClass("hero-img-desktop");
  $("#navigationDesktop").removeClass("hide");
}

$("#hamburgerSVG").click(() => {
  showModal();
});

$("#closeSVG").click(() => {
  hideModal();
});

$("#backdrop").click(() => {
  hideModal();
});
