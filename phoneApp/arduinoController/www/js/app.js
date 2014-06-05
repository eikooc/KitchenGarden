var app = angular.module('app', ['ionic', 'app.controllers'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
		  controller: 'PlantListCtrl'
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.plants', {
      url: "/plants",
      views: {
        'menuContent' :{
          templateUrl: "templates/plants.html",
          controller: 'PlantListCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/plants/:plantListId",
      views: {
        'menuContent' :{
          templateUrl: "templates/plantList.html",
          controller: 'PlantListCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/plants');
});

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});


/* JS */
var herbArray = ['Angelica', 'Basil', 'Laurel', 'Chives', 'Dill', 'Catnip', 'Fennel', 'Lemongrass', 'Spearmint', 'Parsley', 'Vietnamese Coriander', 'Oregano', 'Thyme', 'Rosemary', 'Herb Sage', 'Tarragon'];