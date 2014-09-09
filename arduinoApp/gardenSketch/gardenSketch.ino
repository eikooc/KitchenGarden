/*
Arduino based self regulating kitchen garden
Created by: Jamie Neubert Pedersen
version: 1.0
*/
#include <DHT.h>
#include <SoftwareSerial.h>
#include <Sensirion.h>

// bluetooth related setup
#define bluetoothTx 0 // RX pin on Arduino
#define bluetoothRx 1 // TX pin on Arduino
SoftwareSerial bluetooth(bluetoothTx, bluetoothRx); // Setup bluefruit chip

// soil related setup
#define dataPin 3  // Humidity and temperature sensor pin for SHT10
#define clockPin 4
Sensirion soilSensor = Sensirion(dataPin, clockPin);
float soilTemperature = 0;
float soilMoisture = 0;
float dewpoint;
float goodSoilMoisture = 70;

// air temperature related setup
#define DHTPIN 2        // Humidity and temperature sensor pin for DHT22
#define DHTTYPE DHT22   // Model DHT 22
DHT airSensor(DHTPIN, DHTTYPE); // setup DHT sensor
float airHumidity = 0;
float airTemperature = 0;
float goodAirTemperature = 28.15;

// light related setup
#define lightSensorPin A0 // Set to whereever light sensor is connected
int light_threshold = 500; // Threshold for when to report that light is not enough
int LDRValue = 0;
float goodLDRValue = 700;

// activity led setup
#define ledPin 13 // this is just for checking activity

// relay related setup
#define relayPin1 8
#define relayPin2 9
#define relayPin3 10

// booleans for checking if automation is required
boolean autoMoisture = true;
boolean autoAirTemperature = true;
boolean autoLight = true;

// setup sensor reading interval
unsigned long then = 0; // initialize previous milliseconds variable
unsigned long interval = 5*1000; // seconds to wait

// Initialize settings
void setup() {
  // Start serial
  Serial.begin(9600);
  
  // Initialize bluetooth
  bluetooth.begin(9600);  // begin at baudrate
  bluetooth.print("$$$");  // Enter command mode
  delay(100);  // Short delay
  
  // Initialize output pins.
  pinMode(ledPin, OUTPUT);
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);

  // Initialize input pins.
  pinMode(lightSensorPin, INPUT);

  airSensor.begin(); // begin DHT so it is ready for reading

}

// Main loop
void loop() { 
  unsigned long now = millis();

  // only read values every 1000 milliseconds
  if(now - then > interval) 
  {
    then = now;
    digitalWrite(ledPin, HIGH);
    
    // Read sensor values
    sensorReadings();
    
    // React on sensor values
    reactAirTemperature();
    reactLight();
    reactMoisture();
    
    bluetooth.write(airTemperature+","+LDRValue+","+soilMoisture+".");
    
    
  
  }
  
  digitalWrite(ledPin, LOW);
  
  if (bluetooth.find("t")) {
    int data = bluetooth.parseInt();
    setGoodAirTemperature(data);
  }
  if (bluetooth.find("l")) {
    int data = bluetooth.parseInt();
    setGoodLDRValue(data);
  }
  if (bluetooth.find("w")) {
    int data = bluetooth.parseInt();
    setGoodSoilMoisture(data);
  }
  
  if (bluetooth.find("m")) {
    int data = bluetooth.parseInt();
    if (data == 0)
    {
      autoAirTemperature = false;
    }
    if (data == 1)
    {
      autoLight = false;
    }
    if (data == 2)
    {
      autoMoisture = false;
    }
  }
  if (bluetooth.find("a")) {
    int data = bluetooth.parseInt();
    if (data == 0)
    {
      autoAirTemperature = true;
    }
    if (data == 1)
    {
      autoLight = true;
    }
    if (data == 2)
    {
      autoMoisture = true;
    }
  }
  

}


void sensorReadings() {
  LDRValue = analogRead(lightSensorPin); // read light level from LDR
  airHumidity = airSensor.readHumidity(); // read humidity from DHT sensor
  airTemperature = airSensor.readTemperature(); // read temperature from DHT sensor
  soilSensor.measure(&soilTemperature, &soilMoisture, &dewpoint); // read temperature and moisture from SHT10 sensor
}

void setGoodAirTemperature(float value) {
  goodAirTemperature = value;
}

void setGoodSoilMoisture(float value) {
  goodSoilMoisture = value;
}

void setGoodLDRValue(float value) {
  goodLDRValue = value;
}

void reactAirTemperature() {
  if (autoAirTemperature == false)
  {
    return;
  }
  if (airTemperature > goodAirTemperature) // activate fan to cool when the temperature is above the defined good temperature in degrees Celsius
    { 
      digitalWrite(relayPin1, LOW);
    } 
    else 
    {
      digitalWrite(relayPin1, HIGH);
    }
}

void reactLight() {
  if (autoLight == false)
  {
    return;
  }
  if (LDRValue < goodLDRValue) // activate relay 2 when the light intensity is below the defined good light intensity
    {
      digitalWrite(relayPin2, LOW);
    }
    else
    {
      digitalWrite(relayPin2, HIGH);
    }
}

void reactMoisture() {
  if (autoMoisture == false)
  {
    return;
  }
  if (soilMoisture < goodSoilMoisture) // activate relay 2 when the moisture level is below the defined good moisture level
    {
      digitalWrite(relayPin3, LOW);
      sleep(1000);
      digitalWrite(relayPin3, HIGH);
    }
    else
    {
      digitalWrite(relayPin3, HIGH);
    }
}
