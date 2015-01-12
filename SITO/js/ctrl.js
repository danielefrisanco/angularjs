

'use strict';
 
function Home_ctrl($scope, $http) { }
function Prodotti_ctrl($scope, $http) {(function($) {
    $(function() {
         
 var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
               var width = jcarousel.innerWidth();
/*
                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 2;
                }*/
                 /* width = width / 2;//due elementi alla volta

                jcarousel.jcarousel('items').css('width', width + 'px');*/
            })
            
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);}
function Prodotto_ctrl($scope, $http) {}
function Chi_ctrl($scope, $http, $timeout) {}
function Dove_ctrl($scope, $http, $timeout) {}
function Collaborazioni_ctrl($scope, $http, $timeout) {(function($) {
    $(function() {
    var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
              /*  var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 2;
                }
                */  
       /*     width =  jcarousel.innerWidth()/2;//un item alla volta

                jcarousel.jcarousel('items').css('width', width + 'px'); */
            })  
          
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'  
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);}
 

 
	   
