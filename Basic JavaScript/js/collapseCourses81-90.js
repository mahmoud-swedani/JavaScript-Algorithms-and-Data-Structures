// 81
// Build JavaScript Objects
var myDog = {
  // Only change code below this line
    "name": "mahmoud",
    "legs": 20,
    "tails": 1,
    "friends": ["Water", "Dogs"]
  
  // Only change code above this line
  };
// 82
// Accessing Object Properties with Dot Notation
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line
console.log(shirtValue);
// 83
// Accessing Object Properties with Bracket Notation
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
// 84
// Accessing Object Properties with Variables// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line
console.log(player)

// 85
// Updating Object Properties
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name= "Happy Coder"

console.log(myDog);

// 86
// Add New Properties to a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = ["Woof"];
// 87
// Delete Properties from a JavaScript Object
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
// delete myDog.tails;
// 88
// Using Objects for Lookups
// Setup
function phoneticLookup(val) {
  var result = "";
  // Only change code below this line
  var lookup = {
     "alpha":"Adams",
     "bravo": "Boston",
     "charlie":"Chicago",
     "delta": "Denver",
     "echo":"Easy",
     "foxtrot":"Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));



// ****************************************
// 89
// Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
// ****************************************


// 90
// Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
];