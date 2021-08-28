// 51
// Global vs. Local Scope in Functions
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

// 52
// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5
}
console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));



// 53
// Understanding Undefined Value returned from a Function
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
};

// Only change code below this line
function addFive(num) {
  sum = sum + 5;
};

// Only change code above this line

addThree();
addFive();

// 54
// Assignment with a Returned Value
// Setup
var processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// 55
// Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift();
  // Only change code above this line
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 56
// Understanding Boolean Values
// 57
// Use Conditional Logic with If Statements
// 58
// Comparison with the Equality Operator
// 59
// Comparison with the Strict Equality Operator
// 60
// Practice comparing different values
