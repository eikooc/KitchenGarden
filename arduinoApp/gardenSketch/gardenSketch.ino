/*
Arduino based self regulating kitchen garden
 
 */

#include <SHT1x.h>
#include <DHT.h>

// soil related setup
#define soilDataPin  3
#define soilClockPin 4
SHT1x soilSensor(soilDataPin, soilClockPin);
float soilTemperature;
float soilMoisture;

// air temperature related setup
#define DHTPIN 2        // Humidity and temperature sensor pin
#define DHTTYPE DHT22   // Model DHT 22 (AM2302)
DHT airSensor(DHTPIN, DHTTYPE); // setup DHT sensor
float airHumidity = 0;
float airTemperature = 0;

// light related setup
#define lightSensorPin A0 // Set to whereever light sensor is connected
int light_threshold = 500; // Threshold for when to report that light is not enough
int LDRValue = 0;

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
  LDRValue = analogRead(lightSensorPin); // read light level from LDR
  airHumidity = airSensor.readHumidity(); // read humidity from DHT
  airTemperature = airSensor.readTemperature(); // read temperature from DHT
  soilHumidity = sht1x.readHumidity(); // read temperature from SHT10
  soilTemperature = sht1x.readTemperatureC(); // read humidity from SHT10

}



