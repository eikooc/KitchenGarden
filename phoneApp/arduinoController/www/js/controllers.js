angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlantListCtrl', function($scope, $location) {
  $scope.plants = [
    { title: 'Basil', id: 0, description: 'Basil is a good herb' },
    { title: 'Spearmint', id: 1, description: 'Spearmint is a great herb' },
    { title: 'Tarragon', id: 2, description: 'Tarragon is a super herb' },
    { title: 'Dill', id: 3, description: 'Dill is a fine herb' },
    { title: 'Parsley', id: 4, description: 'Parsley is a juicy herb' },
    { title: 'Oregano', id: 5, description: 'Oregano is a delicious herb' },
	{ title: 'Catnip', id: 6, description: 'Catnip is a spicy herb' }
  ];
  
  $scope.$location = $location;
  
  $scope.plants.push({
        title: 'Thyme',
        id: 7,
        description: 'Thyme is a wonderful herb'
      });

})

.controller('SearchCtrl', function($scope) {
  
})

.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.plant = {};
  $scope.submit = function() {
    if(!$scope.plant.title) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.plants.push($scope.plant);
  };
  
})