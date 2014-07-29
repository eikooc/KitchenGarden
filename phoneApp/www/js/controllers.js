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
  
  $scope.temperature = { 'data' : $scope.plant.temperature };
  $scope.water = { 'data' : $scope.plant.water };
  $scope.light = { 'data' : $scope.plant.light };
  
  

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
  $scope.plants = plantListService.getPlants();
  var tmpArray = [];
  $scope.submit = function(aTitle, aDescription, aTemperature, aWater, aLight) {
    if (!aTitle || !aDescription || !aTemperature || !aWater || !aLight) { // Require all fields to be filled out
      return;
    }
    tmpArray = ({ // define temporary array
      title: aTitle,
      id: $scope.plants.length,
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
