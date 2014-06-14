KitchenGarden
=============

The code in this repository is a part of my bachelor project at DTU.

The software is intended to run a self regulating kitchen garden (Greenhouse).
The gardening automation is run by an Arduino and lets it water itself, cool if it is too hot and turn on a lamp if it needs more light.
It can measure the moisture in the soil, the light levels, the temperature and the humidity.
It can be controlled via bluetooth.

## Controller application
The controller is a web application. It uses the Cordova to be compiled as an Android app.
Further instructions are here: [Controller README](https://github.com/eikooc/KitchenGarden/blob/master/phoneApp/arduinoController/README.md)

## Arduino software
The software for the Arduino is built so it easily can communicate with whatever connects to it.
Further instructions are here: [Arduino README](https://github.com/eikooc/KitchenGarden/tree/master/arduinoApp/README.md)

