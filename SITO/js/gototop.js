
'use strict';
$(document).ready(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.gototop').fadeIn();
          } else {
              $('.gototop').fadeOut();
          }
      });
      $('.gototop').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
  });
