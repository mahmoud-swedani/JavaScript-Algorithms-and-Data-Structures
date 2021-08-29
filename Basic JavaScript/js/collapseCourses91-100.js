// 91
// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

 
// 92
// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);


// 93
// Record Collection


// 94
// Iterate with JavaScript While Loops


// 95
// Iterate with JavaScript For Loops


// 96
// Iterate Odd Numbers With a For Loop


// 97
// Count Backwards With a For Loop


// 98
// Iterate Through an Array with a For Loop


// 99
// Nesting For Loops


// 100
// Iterate with JavaScript Do...While Loops

