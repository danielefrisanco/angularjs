 
'use strict';
var app = angular.module('sito', []).
    config(['$routeProvider', function ($routeProvider) {
		
		 $routeProvider.
        when('/', {
			 templateUrl: 'pages/home.html'
			 , activetab: 'home'
			 , controller: Home_ctrl
			 }).
			  when('/home', {
			 templateUrl: 'pages/prodotti.html'
			 , activetab: 'home'
			 , controller: Home_ctrl
			 }).
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
        
	otherwise({ redirectTo: '/' });	
		
	 }])/*.run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
  }]);*/
	
	
	 
