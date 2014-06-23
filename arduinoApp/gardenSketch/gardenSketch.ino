/*
Arduino based self regulating kitchen garden
 
 */
 
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
  
}

// Main loop
void loop() { 
  // Read sensor values
  analogRead(lightSensorPin);


}
