// preloader js
$(window).on("load", function () {
  $(".preloader").delay(0).fadeOut(300);
});
// date picker
$(document).ready(function () {
  $.dobPicker({
    daySelector: "#dobday" /* Required */,
    monthSelector: "#dobmonth" /* Required */,
    yearSelector: "#dobyear" /* Required */,
    dayDefault: "Day" /* Optional */,
    monthDefault: "Month" /* Optional */,
    yearDefault: "Year" /* Optional */,
    minimumAge: 12 /* Optional */,
    maximumAge: 80 /* Optional */,
  });
});

// fixed menu js
$(window).scroll(function () {
  if ($(this).scrollTop() > 350 && screen.width > 767) {
    $(".sticky-top").addClass("shadow-lg").css("top", "-44px");
    // console.log(screen.width)
  } else {
    $(".sticky-top").removeClass("shadow-lg").css("top", "-143px");
  }
});

// back to top js
let btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "300"
  );
});

// banner slider js
$(".left-banner-main").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="bi bi-chevron-left left"></i>',
  nextArrow: '<i class="bi bi-chevron-right right"></i>',
  fade: true,
});

// banner bottom category slider js
$(".banner-bottom-category-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
  nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});



$(".mobile-topbar .bars i").click(function () {
  $(".mobile-menu-main").addClass("show-mobile-menu");
});

$(".close-m-menu").click(function () {
  $(".mobile-menu-main").removeClass("show-mobile-menu");
});
$(".mobile-topbar .bars i").click(function () {
  $(".mobile-menu-overlay").addClass("show-mobile-menu-overlay");
});
$(".mobile-topbar .bars i").click(function () {
  $(".mobile-menu-overlay").addClass("show-mobile-menu-overlay");
});
$(".close-m-menu").click(function () {
  $(".mobile-menu-overlay").removeClass("show-mobile-menu-overlay");
});
$(".mobile-menu-overlay").click(function () {
  $(".mobile-menu-overlay").removeClass("show-mobile-menu-overlay");
});
$(".mobile-menu-overlay").click(function () {
  $(".mobile-menu-main").removeClass("show-mobile-menu");
});

$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

// })
