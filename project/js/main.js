/*
1. preloader
2.section 2 banner
3. section 5 bg
4. slider owlCarousel

*/
//------------------------------------------
// 1. preloader
//------------------------------------------

$(window).on("load", function () {
  "use strict";
  $("#loader").fadeOut(800);

  setTimeout(function () {
    $(window).scrollTop(0);
  }, 200);
});
//--------------------------------------------
// 3.nav
//--------------------------------------------
$(".line-Hover").click(function () {
  $(".line-Hover").removeClass("w-100_after--line-Hover");
  $(this).addClass("w-100_after--line-Hover");
});

$(document).scroll(function () {
  let top = $(document).scrollTop();
  if (top > 0) {
    $(".nav_style").css("position", "fixed");
    $(".nav_style").addClass("nav--Scroll_animation");
  } else {
    $(".nav_style").removeClass("nav--Scroll_animation");
    $(".nav_style").css("position", "relative");
    $(".line-Hover").removeClass("w-100_after--line-Hover");
  }
});

//--------------------------------------------
// 3.section 2 banner
//--------------------------------------------
let TopBlackPen = 112;
let TopReDPen = -5;
$(".black--pen").css("margin-top", `${TopBlackPen}px`);
$(".red--pen").css("margin-top", `${TopReDPen}%`);

$(document).scroll(function () {
  let top = $(document).scrollTop();
  $(".pencil").css("background-position-y", top / 1.4);
  let ScrollBlackPen = TopBlackPen + top / -4;
  $(".black--pen").css("margin-top", `${ScrollBlackPen}px`);

  let ScrollRedPen = TopReDPen + top / -100;

  $(".red--pen").css("margin-top", `${ScrollRedPen}%`);

  $(".top-right").css("top", `${top / 8}px`);

  $(".note--bg").css("background-position-y", `${top / -8}px`);
  $(".bottom-right").css("bottom", `${top / 16}px`);
  $(".bottom_pen").css("background-position-y", `${top / -8}px`);
});

jQuery(
  (function ($) {
    "use strict";
    var windowsize = $(window).width();

    $.fn.parallaxie = function (options) {
      var options = $.extend(
        {
          speed: 0.2,
          repeat: "no-repeat",
          size: "cover",
          pos_x: "center",
          offset: 0,
        },
        options
      );

      this.each(function () {
        var $el = $(this);
        var local_options = $el.data("parallaxie");
        if (typeof local_options != "object") local_options = {};
        local_options = $.extend({}, options, local_options);

        var image_url = $el.data("image");
        if (typeof image_url == "undefined") {
          image_url = $el.css("background-image");
          if (!image_url) return;

          // APPLY DEFAULT CSS
          var pos_y =
            local_options.offset +
            ($el.offset().top - $(window).scrollTop()) *
              (1 - local_options.speed);
          $el.css({
            "background-image": image_url,
            "background-size": local_options.size,
            "background-repeat": local_options.repeat,
            "background-attachment": "fixed",
            "background-position": local_options.pos_x + " " + pos_y + "px",
          });

          $(window).scroll(function () {
            //var pos_y = - ( $(window).scrollTop() - $el.offset().top ) * ( 1 + local_options.speed ) - ( $el.offset().top * local_options.speed );
            var pos_y =
              local_options.offset +
              ($el.offset().top - $(window).scrollTop()) *
                (1 - local_options.speed);
            $el.data("pos_y", pos_y);
            $el.css(
              "background-position",
              local_options.pos_x + " " + pos_y + "px"
            );
          });
        }
      });
      return this;
    };

    if (windowsize > 992) {
      $(".parallaxie").parallaxie({
        speed: 0.4,
        offset: 0,
      });
    }
  })(jQuery)
);

// $(".number-counters").appear(function () {
//   $(".number-counters [data-to]").each(function () {
//     var e = $(this).attr("data-to");
//     $(this).delay(6e3).countTo({
//       from: 1,
//       to: e,
//       speed: 3500,
//       refreshInterval: 50,
//     });
//   });
// });

//------------------------------------------
// 4. slider owlCarousel
//------------------------------------------

$('img[src$=".jpg"]').each(function (index, element) {
  element.src = element.src.replace(".jpg", ".webp");
});
$('img[src$=".png"]').each(function (index, element) {
  element.src = element.src.replace(".png", ".webp");
});
