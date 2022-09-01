import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(window).on("scroll", () => {
  var blockPosition1 = $("#bbd").offset().top,
    windowScrollPosition1 = $(window).scrollTop();
  var blockPosition2 = $("#about__team").offset().top,
    windowScrollPosition2 = $(window).scrollTop();
  var blockPosition3 = $("#statute").offset().top,
    windowScrollPosition3 = $(window).scrollTop();
  if (blockPosition1 < windowScrollPosition1) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-1").addClass("anchors__item--active");
  }
  if (blockPosition2 < windowScrollPosition2) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-2").addClass("anchors__item--active");
  }
  if (blockPosition3 < windowScrollPosition3) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-3").addClass("anchors__item--active");
  }
});

$(".footer__search").focus(function () {
  $(".footer__input-box").addClass("footer__input-box--active");
  $(".footer__search-img").addClass("footer__search-img--active");
});
$(".footer__search").blur(function () {
  $(".footer__input-box").removeClass("footer__input-box--active");
  $(".footer__search-img").removeClass("footer__search-img--active");
});

$(".scrollto").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate(
    {
      scrollTop: destination,
    },
    900
  );
  return false;
});

$(".header__burger").click(function () {
  $(".header__burger-wrapper").toggleClass("header__burger-wrapper--active");
  $(".header__nav").toggleClass("header__nav--active");
});
$(".cookie").click(function () {
  $(".cookie--on").removeClass("cookie--on");
  function timerCookie() {
    $(".cookie").addClass("cookie--on");
  }
  setTimeout(timerCookie, 600000);
});

