/*
Arduino based self regulating kitchen garden
 
 */
 

#include <DHT.h>

// temperature related setup
#define DHTPIN 2        // Humidity and temperature sensor pin
#define DHTTYPE DHT22   // Model DHT 22 (AM2302)
DHT airSensor(DHTPIN, DHTTYPE); // setup DHT sensor
float airHumidity;
float airTemperature;

// light related setup
int lightSensorPin = 3; // Set to whereever light sensor is connected
int lampRelay = 4; // Set to whereever relay for lamp is connected

// activity led setup
int ledPin = 13; // this is just for checking activity

// Initialize settings
void setup() {
  // Initialize output pins.
  pinMode(ledPin, OUTPUT);

  // Initialize input pins.
  pinMode(lightSensorPin, INPUT);

  airSensor.begin(); // begin DHT so it is ready for reading

}

// Main loop
void loop() { 
  // Read sensor values
  analogRead(lightSensorPin);
  airSensor.readHumidity(); // read humidity from DHT
  airSensor.readTemperature(); // read temperature from DHT


}

