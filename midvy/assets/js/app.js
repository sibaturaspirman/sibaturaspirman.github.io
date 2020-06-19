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
      // self.tabs();
      self.accordion();
      self.stickyFix();
      self.popOver();
      self.dropZone();
      self.modal();
      self.dropDown();
    },

    dropDown: function () {
      $('.header-extra__item .dropdown-menu').on('click', function (e) {
        e.stopPropagation();
      });
    },

    popOver: function () {
      $(function () {
        $('[data-toggle="popover"]').popover()
      });
      $('.popover-dismiss').popover({
        trigger: 'click'
      });
      $('#popover-notification').popover({
        trigger: 'click',
        placement: 'right',
        offset: 120,
        html: true,
        content: function () {
          return $('#notification-popover-container').html();
        },
        template: '<div class="popover notification-popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
      })

      $('.triggerBackdrop').click(function () {
        $('.backdrop').toggleClass('backdrop--hide');
      });
      // $('.backdrop').click(function () {
      //     $(this).addClass('backdrop--hide');
      // });
    },
    // popOver: function () {
    //     tippy('[data-tippy]', {
    //         theme: 'light',
    //         trigger: 'click',
    //         offset: [-16, 30],
    //         arrow: false,
    //         placement: 'right-start',
    //         interactive: true,
    //         content: function (reference) {
    //             const id = reference.getAttribute('data-template');
    //             const template = document.getElementById(id);
    //             return template.innerHTML;
    //         },
    //         allowHTML: true,
    //     });

    //     $('.triggerBackdrop').click(function () {
    //         $('.backdrop').toggleClass('backdrop--hide');
    //     });
    //     $('.backdrop').click(function () {
    //         $(this).addClass('backdrop--hide');
    //     });
    // },

    // tabs: function () {
    //     tabify('#tabs');
    //     tabify('#tabsWWB');
    // },

    stickyFix: function () {
      var stickySidebar = new Sticky('.stickySidebar');
    },

    accordion: function () {

      $('#accordionIcon').click(function () {
        $('.accordion-icon').toggleClass('accordion-icon--close');
        $('.accordion-content').toggleClass('accordion-content--close');
      });

      // $('#headingOne').collapse({

      // })

      $('#collapseOne').on('show.bs.collapse', function () {
        $('.modal__content-list').find('#card1').addClass('list__card--border-red')
        $('#card1').find('.card-header--toggle').addClass('card-header--toggle-down')
      })
      $('#collapseOne').on('hide.bs.collapse', function () {
        $('.modal__content-list').find('#card1').removeClass('list__card--border-red')
        $('#card1').find('.card-header--toggle').removeClass('card-header--toggle-down')
      })

      $('#collapseTwo').on('show.bs.collapse', function () {
        $('.modal__content-list').find('#card2').addClass('list__card--border-red')
        $('#card2').find('.card-header--toggle').addClass('card-header--toggle-down')
      })
      $('#collapseTwo').on('hide.bs.collapse', function () {
        $('.modal__content-list').find('#card2').removeClass('list__card--border-red')
        $('#card2').find('.card-header--toggle').removeClass('card-header--toggle-down')
      })

      $('#collapseThree').on('show.bs.collapse', function () {
        $('.modal__content-list').find('#card3').addClass('list__card--border-red')
        $('#card3').find('.card-header--toggle').addClass('card-header--toggle-down')
      })
      $('#collapseThree').on('hide.bs.collapse', function () {
        $('.modal__content-list').find('#card3').removeClass('list__card--border-red')
        $('#card3').find('.card-header--toggle').removeClass('card-header--toggle-down')
      })

      $('#collapseFour').on('show.bs.collapse', function () {
        $('.modal__content-list').find('#card4').addClass('list__card--border-red')
        $('#card4').find('.card-header--toggle').addClass('card-header--toggle-down')
      })
      $('#collapseFour').on('hide.bs.collapse', function () {
        $('.modal__content-list').find('#card4').removeClass('list__card--border-red')
        $('#card4').find('.card-header--toggle').removeClass('card-header--toggle-down')
      })

      $('#collapseFive').on('show.bs.collapse', function () {
        $('.modal__content-list').find('#card5').addClass('list__card--border-red')
        $('#card5').find('.card-header--toggle').addClass('card-header--toggle-down')
      })
      $('#collapseFive').on('hide.bs.collapse', function () {
        $('.modal__content-list').find('#card5').removeClass('list__card--border-red')
        $('#card5').find('.card-header--toggle').removeClass('card-header--toggle-down')
      })



      // console.log($('#headingOne').hasClass('collapsed'))
      // if ($('#headingOne').hasClass('collapsed')) {
      //     console.log($('#headingOne').hasClass('collapsed'))
      //     $('.list__card').addClass('list__card--border-red')
      // } else {
      //     $('.list__card').removeClass('list__card--border-red')
      // }
    },

    modal: function () {
      $('.btn__operator').on('click', function () {
        let $button = $(this);
        let oldValue = $button.parent().parent().find('input').val();
        let newValue = 0;

        if ($button.val() == '+') {
          newValue = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            newValue = parseFloat(oldValue) - 1;
          } else {
            newValue = 0;
          }
        }
        $button.parent().parent().find('input').val(newValue);
      });
    },

    header: function () {
      $(function () {
        var current = location.pathname;
        $('.menu a').each(function () {
          var $this = $(this);
          // if the current path is like this link, make it active
          if ($this.attr('href').indexOf(current) !== -1) {
            $this.addClass('active');
          }
        })
      })

      $('#triggerMenuBurger').click(function () {
        $('.header').addClass('header--show');
      });
      $('#triggerMenuBurgerClose').click(function () {
        $('.header').removeClass('header--show');
      });

      if (window.matchMedia('(max-width: 1024px)').matches) {
        $('.header').toggleClass('header--scroll');
      }
    },

    swiper: function () {
      //homeSlider
      var homeSlider = new Swiper('#homeSlider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        looping: true,
        disableOnInteraction: false,
        navigation: {
          nextEl: '.home-sliders__headline-pgs-next .home-sliders__headline-pgs-obj:nth-child(1)',
          prevEl: '.home-sliders__headline-pgs-prev .home-sliders__headline-pgs-obj:nth-child(1)',
        },
      });
    },

    dropZone: function () {

    }
  };

  $(document).ready(function () {
    global_functions.init();
  });

})(jQuery);

// MicroModal.init();

// $(document).ready( function() {
//     tabify('#tabs');
//     tabify('#tabsWWB');
// });

Dropzone.options.uploadDropzone = {
  maxFiles: 3,
  dictDefaultMessage: 'your custom message',
  accept: function (file, done) {
    console.log('uploaded');
    done();
  },
  init: function () {
    this.on('maxfilesexceeded', function (file) {
      alert('Max Files : 3')
      this.removeFile(file)
      // this.removeAllFiles();
      // this.addFile(file)
    });
  }
};

$(document).ready(function () {
  $('div#uploadDropzone').dropzone({
    url: '/upload',
    dictDefaultMessage: 'Drop files here to upload',
    dictFallbackMessage: 'Your browser does not support drag\'n\'drop file uploads.',
    dictFallbackText: 'Please use the fallback form below to upload your files like in the olden days.',
    dictFileTooBig: 'File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.',
    dictInvalidFileType: 'You can\'t upload files of this type.',
    dictResponseError: 'Server responded with {{statusCode}} code.',
    dictCancelUpload: 'Cancel upload',
    dictCancelUploadConfirmation: 'Are you sure you want to cancel this upload?',
    dictRemoveFile: 'Remove file',
    dictMaxFilesExceeded: 'You can not upload any more files.'
  });
  $('div#uploadDropzone').addClass('dropzone');



});