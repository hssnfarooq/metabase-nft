(function ($) {
  "use script";

  // WOW JS
  new WOW().init();
  // Nice Select
  $("select").niceSelect();
  // Search
  $(".header-search-icon i.bi-search").click(function () {
    $(".header-top-search-form, .header-search-icon i.fa-times").addClass(
      "active"
    );
  });
  $(".header-search-icon i.fa-times").click(function () {
    $(".header-top-search-form, .header-search-icon i.fa-times").removeClass(
      "active"
    );
  });

  // Hero Search
  $(".s-bar-full form").click(function () {
    $(".s-bar-overly-focus, .off_canvars_overlay").addClass("active");
  });
  $(".off_canvars_overlay").click(function () {
    $(".s-bar-overly-focus").removeClass("active");
  });

  // Scroll Area
  $(document).ready(function () {
    $(".scroll-area").click(function () {
      $("html").animate(
        {
          scrollTop: 0,
        },
        700
      );
      return false;
    });
    $(window).on("scroll", function () {
      var a = $(window).scrollTop();
      if (a > 400) {
        $(".scroll-area").slideDown(300);
      } else {
        $(".scroll-area").slideUp(200);
      }
    });
  });

  /*---Live Auction----*/
  var $liveAuction = $(".live-auction-slider");
  if ($liveAuction.length > 0) {
    $(".live-auction-slider").owlCarousel({
      autoplay: true,
      loop: false,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
      margin: 30,
      dots: false,
      navText: [
        '<span class="liveac-slider-nav"><i class="bi bi-arrow-left"></i></span>',
        '<span class="liveac-slider-nav"><i class="bi bi-arrow-right"></i></span>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          margin: 0,
        },
        500: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }
  /*---Latest Blog----*/
  var $LatestBlog = $(".latest-blog-slider");
  if ($LatestBlog.length > 0) {
    $(".latest-blog-slider").owlCarousel({
      autoplay: true,
      loop: false,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
      margin: 30,
      dots: false,
      navText: [
        '<span class="latest-slider-nav"><i class="bi bi-arrow-left"></i></span>',
        '<span class="latest-slider-nav"><i class="bi bi-arrow-right"></i></span>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          margin: 0,
        },
        500: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }
  $("a[data-rel^=lightcase]").lightcase({
    transition:
      "elastic" /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */,
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });

  // Sticky Menu
  $(document).ready(function () {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 150) {
        $(".header").removeClass("sticky");
      } else {
        $(".header").addClass("sticky");
      }
    });
  });
})(jQuery);

// get form
var form = document.getElementById("form");
var email = document.getElementById("email");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  email.value = "THANK YOU";
});
