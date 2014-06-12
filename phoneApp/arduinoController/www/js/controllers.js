angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlantListCtrl', function($scope, $location, myService) {
  $scope.$location = $location;
  
  $scope.plants = myService.getPlants();
  
  
  $scope.$on('XChanged', function(event, x) {
        plants = x;
		$scope.plants = x;
    }); 
  

})

.controller('MyPlantCtrl', function($scope) {
  
})

.controller('MyController', function($scope, $ionicModal) {
 
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $ionicModal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });
  
})

.controller('ModalCtrl', function($scope, myService) {
  
  var y = [];
  $scope.submit = function(a, b, c) {
  if(!a || !b || !c) {
      return;
    }
	y = ({
	  title: a, 
	  id: b, 
	  description: c
	});
	myService.addPlant(y);
    $scope.modal.hide();
  }
  
  $scope.close = function() {
    $scope.modal.hide();
  };
         
  $scope.$on('XChanged', function(event, x) {
    $scope.plants = x;
  });
  
});