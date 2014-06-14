angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlantListCtrl', function($scope, $location, plantList) {
  $scope.$location = $location;

  $scope.plants = plantList.getPlants();


  $scope.$on('XChanged', function(event, x) {
        plants = x;
		$scope.plants = x;
    });


})

.controller('MyPlantCtrl', function($scope) {

})

//
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

// The modal that pops up to add new plants to the list.
.controller('ModalCtrl', function($scope, plantList) {

  var tmpArray = [];
  $scope.submit = function(aTitle, aID, aDescription) {
  if(!aTitle || !aID || !aDescription) {  // Require all fields to be filled out
      return;
    }
	tmpArray = ({  // define temporary array
	  title: aTitle,
	  id: aID,
	  description: aDescription
	});
	plantList.addPlant(tmpArray);  // push to list
    $scope.modal.hide();
  }

  $scope.close = function() {
    $scope.modal.hide();
  };

  $scope.$on('XChanged', function(event, x) {
    $scope.plants = x;
  });

});
