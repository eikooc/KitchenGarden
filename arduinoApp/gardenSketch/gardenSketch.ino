/*
Arduino based self regulating kitchen garden
 
 */
#include <DHT.h>

#include <Sensirion.h>

// soil related setup
#define dataPin 3
#define clockPin 4
Sensirion soilSensor = Sensirion(dataPin, clockPin);
float soilTemperature;
float soilMoisture;
float dewpoint;

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

// setup sensor reading interval
unsigned long prevMillis = 0; // initialize previous milliseconds variable
unsigned long interval = 5000; // number of milliseconds to wait

// Initialize settings
void setup() {
  // start serial
  Serial.begin(9600);
  
  // Initialize output pins.
  pinMode(ledPin, OUTPUT);

  // Initialize input pins.
  pinMode(lightSensorPin, INPUT);

  airSensor.begin(); // begin DHT so it is ready for reading

}

// Main loop
void loop() { 
  unsigned long curMillis = millis();

  // only read values every 1000 milliseconds
  if(curMillis - prevMillis > interval) {
    prevMillis = curMillis;
    
    // Read sensor values
    sensorReadings();
  }

}


void sensorReadings() {
  LDRValue = analogRead(lightSensorPin); // read light level from LDR
  airHumidity = airSensor.readHumidity(); // read humidity from DHT sensor
  airTemperature = airSensor.readTemperature(); // read temperature from DHT sensor
  soilSensor.measure(&soilTemperature, &soilMoisture, &dewpoint); // read temperature and moisture from SHT10 sensor
}

