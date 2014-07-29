angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {})

.controller('PlantListCtrl', function($scope, $location, plantListService) {
  $scope.$location = $location;

  $scope.plants = plantListService.getPlants();


  $scope.$on('XChanged', function(event, x) {
    plants = x;
    $scope.plants = x;
  });


})

.controller('MyPlantCtrl', function($scope, myPlantService) {
  

  $scope.plant = myPlantService.getMyPlant();

  $scope.setPlant = function(somePlant) {
    myPlantService.setMyPlant(somePlant); // set myPlant
    console.log(myPlantService.getMyPlant());
  };

  $scope.$on('myPlantChanged', function(event, myPlant) {
    plant = myPlant;
    $scope.plant = myPlant;
  });
})

//
.controller('MyController', function($scope, $ionicModal, bluetoothService) {

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
  $scope.bluetooth = function() {
    bluetoothService.initialize();
  };
  

})

// The modal that pops up to add new plants to the list.
.controller('ModalCtrl', function($scope, plantListService) {

  var tmpArray = [];
  $scope.submit = function(aTitle, aID, aDescription, aTemperature, aWater, aLight) {
    if (!aTitle || !aID || !aDescription || !aTemperature || !aWater || !aLight) { // Require all fields to be filled out
      return;
    }
    tmpArray = ({ // define temporary array
      title: aTitle,
      id: aID,
      description: aDescription,
      temperature: aTemperature,
      water: aWater,
      light: aLight
    });
    plantListService.addPlant(tmpArray); // push to list
    $scope.modal.hide();
  }

  $scope.close = function() {
    $scope.modal.hide();
  };

  $scope.$on('XChanged', function(event, x) {
    $scope.plants = x;
  });

});
