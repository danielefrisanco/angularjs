

'use strict';
function Home_ctrl($scope, $http) {}
function Prodotti_ctrl($scope, $http) {}
function Prodotto_ctrl($scope, $http) {}
function Chi_ctrl($scope, $http, $timeout) {}
function Dove_ctrl($scope, $http, $timeout) {}
function Collaborazioni_ctrl($scope, $http, $timeout) {}
 

	  
	  
	  
	 function CarouselDemoCtrl ($scope, $http, $timeout)  {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}
