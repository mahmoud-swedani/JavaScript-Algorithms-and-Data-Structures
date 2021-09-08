// Pass Arguments to Avoid External Dependence in a Function
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (a) {
  return a + 1;

  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue);
console.log(newValue);

