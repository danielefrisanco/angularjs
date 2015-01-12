 
'use strict';


 
 
// var app = angular.module('sito', ['ui.bootstrap']).
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
        })/*. 
          when('/home/:id_collaborazione', {
          templateUrl: function (params) {  return 'pages/' + params.id_collaborazione + '.html'; },
           controller: Collaborazioni_ctrl,
          activetab: 'collaborazioni'
        })*/.
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
          when('/home', {
          templateUrl: function (params) { return 'pages/home.html'; },
       
          activetab: 'home'
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
