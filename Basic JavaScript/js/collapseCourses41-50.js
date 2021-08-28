// 41
// Access Multi-Dimensional Arrays With Indexes
// print num 8 from tjis arry 

var myArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14],
    ];
  
  var myData = myArray[2][1];

// 42
// Manipulate Arrays With push()
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]) ;
console.log(myArray);
// Only change code below this line

// 43
// Manipulate Arrays With pop()
// Setup
// delete second item "index" from myArray 

 var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop(1);
console.log(myArray)
console.log(removedFromMyArray)
// 44
// Manipulate Arrays With shift()
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
console.log(myArray)
console.log(removedFromMyArray)

// 45
// Manipulate Arrays With unshift()
// delete first  item and add ["Paul", 35]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Only change code below this line
console.log(myArray);

// 46
// Shopping List
var myList = [ ["mahmoud", 23], ["ahmad", 25], ["alaa", 28], ["walaa", 20], ["fatema", 50] ];

// 47
// Write Reusable JavaScript with Functions
function reusableFunction () {
    console.log("Hi World");
  }
  
  
   reusableFunction ()
// 48
// Passing Values to Functions with Arguments
function functionWithArgs (a, b) {
    console.log( a + b);
  };
  
  functionWithArgs (1, 2);
  functionWithArgs (7, 9);
  
// 49
// Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here 
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 50
// Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
      var myVar =  "here";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);