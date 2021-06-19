"use strict";

// banner iklan
$("#slider1").owlCarousel({
  items: 1,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTimeout:3000,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
});
// end banner iklan

$("#slider3").owlCarousel({
  items: 4,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTimeout:2000,
  responsiveClass:true,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  responsive:{
    0: {
      items:1,
      nav:true,
    },

    600: {
      items:3,
      nav:true,
    },

    1000: {
      items:4,
      nav:true,
    }

  }
});
