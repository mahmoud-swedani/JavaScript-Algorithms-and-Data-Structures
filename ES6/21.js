// Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);