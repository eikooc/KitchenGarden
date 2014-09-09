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

.controller('MyPlantCtrl', function($scope, myPlantService, $cordovaBluetoothSerial) {

	$scope.plant = myPlantService.getMyPlant();
  
	$scope.temperature = { 'data' : $scope.plant.temperature };
	$scope.water = { 'data' : $scope.plant.water };
	$scope.light = { 'data' : $scope.plant.light };
  
	
	$scope.plant.light = $scope.light.data;
	
	$scope.sendSettings = function() {
		console.log('Send t:', $scope.temperature.data);
		console.log('Send l:', $scope.light.data);
		console.log('Send m:', $scope.water.data);
		$scope.plant.temperature = $scope.temperature.data;
		$scope.plant.light = $scope.light.data;
		$scope.plant.water = $scope.water.data;
		$cordovaBluetoothSerial.write("t"+$scope.temperature.data+"w"+$scope.water.data+"l"+$scope.light.data);
	}
  

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
.controller('MyController', function($scope, $ionicModal, $cordovaBluetoothSerial) {
  var macAddress = '00:19:5D:25:3F:5A';
  $scope.scan = function () {
      $cordovaBluetoothSerial
        .connectInsecure(macAddress)
        .then(function (result) {
          $scope.list = result;
		  alert(result);
        }, function (err) {
          $scope.list = 'SCAN ERROR (see console)';
          console.error(err);
		  alert(err);
        });
    }
	
	$scope.checkStatus = function() {
		$scope.received.temperature = $cordovaBluetoothSerial.readUntil(",");
		$scope.received.light = $cordovaBluetoothSerial.readUntil(",");
		$scope.received.water = $cordovaBluetoothSerial.readUntil(".");
	}
	
	
  
  $scope.checkBluetooth = function() {
	alert('Trying to connect');
        var makeBluetoothCheck = $cordovaBluetoothSerial.isEnabled();

        makeBluetoothCheck.then(
            function(){
                alert('Bluetooth Enabled');
            },
            function(){
                alert('Bluetooth Disabled');
            }
        );
    }

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
