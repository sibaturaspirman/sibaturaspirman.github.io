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
      self.rellaxLib();
      self.swiperSlider();

    },

    header: function () {
      $('#headerActionMenu').click(function () {
        $('.header-action__burger').toggleClass('header-action__burger--active');
      });

      //when scroll
      let scrollpos = window.scrollY
      const header = document.querySelector(".header")
      const header_height = header.offsetHeight


      const add_class_on_scroll = () => header.classList.add("header--active")
      const remove_class_on_scroll = () => header.classList.remove("header--active")


      window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY

        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }

        console.log(scrollpos)
      })
    },

    rellaxLib: function () {
      var rellax = new Rellax('.rellax');
    },

    swiperSlider: function () {
      var menuHero = ['Eagle Rock, Wayag – Raja Ampat Island', 'Mount Bromo - East Java', 'Situ Bagendit - Bandung']
      var swiperHero = new Swiper('#hero .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        looping: true,
        autoplay: {
          delay: 4500,
        },
        disableOnInteraction: false,
        pagination: {
          el: '#hero .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<a href="javascript:;" class="' + className + '">' + (menuHero[index]) + '</a>';
          },
        },
        navigation: {
          nextEl: '#hero .swiper-button-next',
          prevEl: '#hero .swiper-button-prev',
        },
      });

      swiperHero.on('slideChange', function () {
        var heroCurrentActive = swiperHero.activeIndex;

        $('#heroActivePage').html(heroCurrentActive + 1);

        if (heroCurrentActive === 0) {
          $('.hero-image__1').removeClass("hide");
          $('.hero-image__2').addClass("hide");
          $('.hero-image__3').addClass("hide");
        } else if (heroCurrentActive === 1) {
          $('.hero-image__1').addClass("hide");
          $('.hero-image__2').removeClass("hide");
          $('.hero-image__3').addClass("hide");
        } else if (heroCurrentActive === 2) {
          $('.hero-image__1').addClass("hide");
          $('.hero-image__2').addClass("hide");
          $('.hero-image__3').removeClass("hide");
        }
      });
      // swiperHero.autoplay.stop();
    }
  };

  $(document).ready(function () {
    global_functions.init();
  });

})(jQuery);