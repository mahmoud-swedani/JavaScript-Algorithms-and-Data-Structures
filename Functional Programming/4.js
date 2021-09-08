// 4
// Avoid Mutations and Side Effects Using Functional Programming
// The global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  return fixedValue + 1;

  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue);
console.log(newValue);



