// Define the container for the controllers, services, filters, etc.
var app = angular.module('app', [
  'ionic',
  'app.controllers'
])

// Define the run method
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
    }
  });
})

// The following is the routing for the app. The different views are called from here
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.myPlant', {
    url: "/myPlant",
    views: {
      'menuContent': {
        templateUrl: "templates/myPlant.html",
        controller: 'PlantListCtrl'
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  })
    .state('app.plants', {
      url: "/plants",
      views: {
        'menuContent': {
          templateUrl: "templates/plants.html",
          controller: 'PlantListCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/plants/:plantListId",
    views: {
      'menuContent': {
        templateUrl: "templates/plantOverview.html",
        controller: 'PlantListCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/myPlant');
});

app.directive('backImg', function() {
  return function(scope, element, attrs) {
    var url = attrs.backImg;
    element.css({
      'background-image': 'url(' + url + ')',
      'background-size': 'cover'
    });
  };
});

// Service that enables the list of plants to be called from anywhere
app.service('plantList', function($rootScope) {
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



/* JS */
var herbArray = ['Angelica', 'Basil', 'Laurel', 'Chives', 'Dill', 'Catnip', 'Fennel', 'Lemongrass', 'Spearmint', 'Parsley', 'Vietnamese Coriander', 'Oregano', 'Thyme', 'Rosemary', 'Herb Sage', 'Tarragon'];
