 
'use strict';
var app = angular.module('sito', []).
    config(['$routeProvider', function ($routeProvider) {
		
		 $routeProvider.
        when('/', {
			 templateUrl: 'pages/home.html'
			 , activetab: 'home'
			 , controller: Home_ctrl
			 }).
			 /* fare in modo che la home.html sia come vuota e sia fatta dalla prodotti.html+collaborazioni.html
			  when('/home', {
			 templateUrl: 'pages/prodotti.html'
			 , activetab: 'home'
			 , controller: Home_ctrl
			 }).*/
         when('/home/:id_prodotto', {
          templateUrl: function (params) { return 'pages/' + params.id_prodotto + '.html'; },
         controller: Prodotto_ctrl,
          activetab: 'home'
        }). 
          when('/home/:id_collaborazione', {
          templateUrl: function (params) {  return 'pages/' + params.id_collaborazione + '.html'; },
           controller: Collaborazioni_ctrl,
          activetab: 'collaborazioni'
        }).
        when('/chi', {
          templateUrl: function (params) { return 'pages/chi.html'; },
          controller: Chi_ctrl,
          activetab: 'chi'
        }).
        when('/dove', {
          templateUrl: function (params) { return 'pages/dove.html'; },
         controller: Dove_ctrl,
          activetab: 'dove'
        }).
        when('/prodotti', {
          templateUrl: function (params) { return 'pages/prodotti.html'; },
         controller: Prodotti_ctrl,
          activetab: 'prodotti'
        }).
        when('/collaborazioni', {
          templateUrl: function (params) { return 'pages/collaborazioni.html'; },
         controller: Collaborazioni_ctrl,
          activetab: 'collaborazioni'
        }).
        
        
	otherwise({ redirectTo: '/' });	
		
	 }])/*.run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
  }]);
 
 
 
 
 
 
 
 
  * 
  * 
 PROVARE il controller qui
 .controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
 
 
    */
	
	//Data
var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];

//Angular App Module and Controller
angular.module('sito', [])
.controller('MapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});
	 
	 
