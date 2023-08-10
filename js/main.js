(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-close").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});


// slider-activation
const swiper = new Swiper('.hero-slide-active', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
})

  $('.swiper-pagination-bullet').hover(function() {
    swiper.autoplay.stop();
  },function() {
      swiper.autoplay.start();
  }); 

// slider-activation
const swiperPost = new Swiper('.post-row', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 24,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
})



$(".post-row").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});
