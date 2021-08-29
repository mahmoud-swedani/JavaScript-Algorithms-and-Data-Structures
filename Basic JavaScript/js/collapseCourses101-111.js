// 101
// Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
      if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n-1];
    }
  // Only change code above this line 
}


// 102
// Profile Lookup
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Only change code below this line
  for( var i = 0 ; i < contacts.length ; i++){
      if(contacts[i].firstName === name){
          return contacts[i][prop] || "No such property"
      }
  }
   return "No such contact"
// Only change code above this line
}

var data = lookUpProfile("Akira", "likes");
console.log(data)

// 103
// Generate Random Fractions with JavaScript
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

console.log(randomFraction())

// 104
// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
;
}
console.log(randomWholeNum())

// 105
// Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
;
  // Only change code above this line
}



// 106
// Use the parseInt Function
function convertToInteger(str) {
  var a = parseInt(str);
  return a
}

console.log(convertToInteger("56"));

// 107
// Use the parseInt Function with a Radix
function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a
  }
  
  convertToInteger("10011");
  console.log(convertToInteger("10011"));
  

// 108
// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
 }
 
 checkEqual(1, 2);


// 109
// Use Multiple Conditional (Ternary) Operators
function checkSign(a) {
  return (a > 0) ? "positive" 
    : (a < 0) ? "negative" 
    : "zero";
}

checkSign(10);

// 110
// Use Recursion to Create a Countdown
// Only change code below this line
function countdown(n){
    if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(10));

// Only change code above this line

// 111
// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
};

console.log(rangeOfNumbers(1,5));

