angular.module('app.services', [])

// Service that enables the myPlant variable to be called and set from anywhere
.service('myPlantService', function($rootScope) {
  var myPlant = {
    title: 'Basil',
    scientific: 'Ocimum basilicum',
    id: 0,
    description: 'Basil is commonly used fresh in cooked recipes. In general, it is added at the last moment, as cooking quickly destroys the flavor',
    temperature: 22,
    water: 75,
    light: 500
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



.service('bluetoothService', function($rootScope) {
  var macAddress = "00:19:5D:25:3F:5A";
  var bluetooth = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        bluetoothSerial.connect(macAddress, bluetooth.onConnect, bluetooth.onDisconnect);
    },
    onConnect: function() {
        bluetoothSerial.subscribe("\n", bluetooth.onMessage, bluetooth.subscribeFailed);
        alert("Connected to " + macAddress + ".");
    }, 
    onDisconnect: function() {
        alert("Disconnected.");
    },
    onMessage: function(data) {
        alert("data");       
    },
    subscribeFailed: function() {
        alert("subscribe failed");
    }
  };
  return {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        bluetoothSerial.connect(macAddress, bluetooth.onConnect, bluetooth.onDisconnect);
    },
    onConnect: function() {
        bluetoothSerial.subscribe("\n", bluetooth.onMessage, bluetooth.subscribeFailed);
        alert("Connected to " + macAddress + ".");
    }, 
    onDisconnect: function() {
        alert("Disconnected.");
    },
    onMessage: function(data) {
        alert("data");       
    },
    subscribeFailed: function() {
        alert("subscribe failed");
    }
  };
})

var x = [{
  title: 'Basil',
  scientific: 'Ocimum basilicum',
  id: 0,
  description: 'Basil is commonly used fresh in cooked recipes. In general, it is added at the last moment, as cooking quickly destroys the flavor',
  temperature: 22,
  water: 75,
  light: 500
}, {
  title: 'Spearmint',
  scientific: 'Mentha spicata',
  id: 1,
  description: 'Spearmint leaves can be used fresh, dried, or frozen. They can also be preserved in salt, sugar, sugar syrup, alcohol, or oil',
  temperature: 20,
  water: 80,
  light: 520
}, {
  title: 'Tarragon',
  scientific: 'Artemisia dracunculus',
  id: 2,
  description: 'Tarragon is one of the four fines herbes of French cooking, and is particularly suitable for chicken, fish and egg dishes',
  temperature: 23,
  water: 72,
  light: 690
}, {
  title: 'Dill',
  scientific: 'Anethum graveolens',
  id: 3,
  description: 'Dill is best when used fresh as it loses its flavor rapidly if dried; however, freeze-dried dill leaves retain their flavor relatively well for a few months',
  temperature: 21,
  water: 72,
  light: 612
}, {
  title: 'Parsley',
  scientific: 'Petroselinum crispum',
  id: 4,
  description: 'Green parsley is used frequently as a garnish on potato dishes, on rice dishes , on fish, fried chicken, lamb, goose, and steaks, as well in meat or vegetable stews',
  temperature: 22,
  water: 77,
  light: 700
}, {
  title: 'Oregano',
  scientific: 'Origanum vulgare',
  id: 5,
  description: 'Oregano is mostly used for flavoring meat, especially for mutton and lamb',
  temperature: 26,
  water: 60,
  light: 440
}, {
  title: 'Catnip',
  scientific: 'Nepeta cataria',
  id: 6,
  description: 'Catnib can be brewed to produce a herbal tea. Also used as a culinary herb for many dishes. ',
  temperature: 22,
  water: 74,
  light: 639
}, {
  title: 'Thyme',
  scientific: 'Thymus vulgaris',
  id: 7,
  description: 'In some Levantine countries, and Assyrian, contains thyme as a vital ingredient. It is a common component of the bouquet garni, and of herbes de Provence',
  temperature: 26,
  water: 78,
  light: 590
}];
