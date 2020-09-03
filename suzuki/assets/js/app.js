(function ($) {

  'use strict';

  var $html = $('html');

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  var global_functions = {
    init: function () {
      var self = this;

      self.header();
      self.slider();
      self.accordion();

    },

    accordion: function () {

      $('#accordionIcon').click(function () {
        $('.accordion-icon').toggleClass('accordion-icon--close');
        $('.accordion-content').toggleClass('accordion-content--close');
      });

      // $('#collapseOne').on('show.bs.collapse', function () {
      //   $('.modal__content-list').find('#card1').addClass('list__card--border-red')
      //   $('#card1').find('.card-header--toggle').addClass('card-header--toggle-down')
      // })
      // $('#collapseOne').on('hide.bs.collapse', function () {
      //   $('.modal__content-list').find('#card1').removeClass('list__card--border-red')
      //   $('#card1').find('.card-header--toggle').removeClass('card-header--toggle-down')
      // })

      // $('#collapseTwo').on('show.bs.collapse', function () {
      //   $('.modal__content-list').find('#card2').addClass('list__card--border-red')
      //   $('#card2').find('.card-header--toggle').addClass('card-header--toggle-down')
      // })
      // $('#collapseTwo').on('hide.bs.collapse', function () {
      //   $('.modal__content-list').find('#card2').removeClass('list__card--border-red')
      //   $('#card2').find('.card-header--toggle').removeClass('card-header--toggle-down')
      // })

      // $('#collapseThree').on('show.bs.collapse', function () {
      //   $('.modal__content-list').find('#card3').addClass('list__card--border-red')
      //   $('#card3').find('.card-header--toggle').addClass('card-header--toggle-down')
      // })
      // $('#collapseThree').on('hide.bs.collapse', function () {
      //   $('.modal__content-list').find('#card3').removeClass('list__card--border-red')
      //   $('#card3').find('.card-header--toggle').removeClass('card-header--toggle-down')
      // })

      // $('#collapseFour').on('show.bs.collapse', function () {
      //   $('.modal__content-list').find('#card4').addClass('list__card--border-red')
      //   $('#card4').find('.card-header--toggle').addClass('card-header--toggle-down')
      // })
      // $('#collapseFour').on('hide.bs.collapse', function () {
      //   $('.modal__content-list').find('#card4').removeClass('list__card--border-red')
      //   $('#card4').find('.card-header--toggle').removeClass('card-header--toggle-down')
      // })

      // $('#collapseFive').on('show.bs.collapse', function () {
      //   $('.modal__content-list').find('#card5').addClass('list__card--border-red')
      //   $('#card5').find('.card-header--toggle').addClass('card-header--toggle-down')
      // })
      // $('#collapseFive').on('hide.bs.collapse', function () {
      //   $('.modal__content-list').find('#card5').removeClass('list__card--border-red')
      //   $('#card5').find('.card-header--toggle').removeClass('card-header--toggle-down')
      // })


    },

    header: function () {
      $('#triggerMenuBurger').click(function () {
        $('.menu').toggleClass('menu--active');
        $('.menu-list').toggleClass('menu-list--show');
        $('.header').toggleClass('header--hide');
        $('.main').toggleClass('main--hide');
        $('.backdrop').toggleClass('backdrop--hide');

      });
      // $('#triggerMenuBurgerClose').click(function () {
      //   $('.header').removeClass('header--show');
      // });

      // if (window.matchMedia('(max-width: 1024px)').matches) {
      //   $('.header').toggleClass('header--scroll');
      // }
    },

    slider: function () {
      var swiper = new Swiper('#hero', {
        pagination: {
          el: '#hero .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#hero .swiper-button-next',
          prevEl: '#hero .swiper-button-prev',
        },
      });
    }
  };

  $(document).ready(function () {
    global_functions.init();
  });

})(jQuery);