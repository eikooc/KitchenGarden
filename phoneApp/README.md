Bluetooth based Arduino controller
=====================

This is the controller for the Arduino.
With this you can choose a template plant and modify it's settings.
It is also possible to manually control the Arduino.

## Installing

You just need to download the .apk file from eikooc.github.io


## Building (optional)

If you want to build the controller yourself you need to install the node package manager (npm)

### Windows
http://nodejs.org/download/

### Ubuntu

First install nodejs and npm via APT from the terminal.

On older systems than Ubuntu 13.04
Following Rahul Bansal's instructions https://rtcamp.com/tutorials/nodejs/node-js-npm-install-ubuntu/

Add Chris Lea's repository
```bash
$ apt-get install python-software-properties
$ apt-add-repository ppa:chris-lea/node.js
$ apt-get update
```
Then install nodejs and npm
```bash
$ sudo apt-get install nodejs 
```

To check your versions of nodejs and npm write
```bash
$ node -v
$ npm -v
```
It should output at least v0.10.28 for node and 1.4.14 for npm

Afterwards install the ionic framework and it's dependencies
```bash
$ sudo npm install -g 
$ sudo npm install -g cordova ionic gulp
$ npm install
```

To build the app for Android you need the Android SDK
www.android.com

change directory to the phoneApp, add the Android platform and run it.
```bash
$ cd /path/to/arduinoController
$ sudo ionic platform android
$ sudo ionic run android
```

### Other Unix distributions
https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

## Run
To run the web app a http server use Python like so:
```bash
$ cd /path/to/arduinoController
$ sudo python -m http.server
```


## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.

