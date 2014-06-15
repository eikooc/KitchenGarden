// Define the container for the controllers, services, filters, etc.
var app = angular.module('app', [
  'ionic',
  'app.controllers',
  'app.services',
  'app.directives'
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
        controller: 'MyPlantCtrl'
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
