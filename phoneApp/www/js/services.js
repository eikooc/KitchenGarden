angular.module('app.services', [])

// Service that enables the myPlant variable to be called and set from anywhere
.service('myPlantService', function($rootScope) {
  var myPlant = {
    title: 'Basil',
    id: 0,
    description: 'Basil is a good herb'
  };
  return {
    getMyPlant: function() {
      return myPlant;
    },
    setMyPlant: function(y) {
      myPlant = y;
      $rootScope.$broadcast('myPlantChanged', myPlant);
    }
  };
})

// Service that enables the list of plants to be called from anywhere
.service('plantListService', function($rootScope) {
  return {
    getPlants: function() {
      return x;
    },
    addPlant: function(y) {
      x.push(y);
      $rootScope.$broadcast('XChanged', x);
    }
  };
})

var x = [{
  title: 'Basil',
  id: 0,
  description: 'Basil is a good herb'
}, {
  title: 'Spearmint',
  id: 1,
  description: 'Spearmint is a great herb'
}, {
  title: 'Tarragon',
  id: 2,
  description: 'Tarragon is a super herb'
}, {
  title: 'Dill',
  id: 3,
  description: 'Dill is a fine herb'
}, {
  title: 'Parsley',
  id: 4,
  description: 'Parsley is a juicy herb'
}, {
  title: 'Oregano',
  id: 5,
  description: 'Oregano is a delicious herb'
}, {
  title: 'Catnip',
  id: 6,
  description: 'Catnip is a spicy herb'
}, {
  title: 'Thyme',
  id: 7,
  description: 'Thyme is a wonderful herb'
}];