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
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value !== ""){
  records[id][prop] = value;
  
  } else if (prop === "tracks" && value !== ""){
  if (!records[id].hasOwnProperty("tracks")){
  records[id][prop] = [];
  records[id][prop].push(value);
  }  
  records[id][prop].push(value);
  } else {
  delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');




// 94
// Iterate with JavaScript While Loops
// Setup
var myArray = [];

// Only change code below this line
var x = 5
while (x >= 0){
  myArray.push(x);
  x -= 1
}
console.log(myArray);

// 95
// Iterate with JavaScript For Loops
// Setup
var myArray = [];

// Only change code below this line
for (var x = 1; x < 6; x++) {
  myArray.push(x);
}
console.log(myArray);


// 96
// Iterate Odd Numbers With a For Loop
// Setup
var myArray = [];
for (var x = 1; x < 10; x+=2) {
  myArray.push(x);
}
console.log(myArray);


// Only change code below this line

// 97
// Count Backwards With a For Loop
// Setup
var myArray = [];

// Only change code below this line
for (var x = 9; x > 0; x-=2) {
  myArray.push(x);
}
console.log(myArray);


// 98
// Iterate Through an Array with a For Loop
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0
// Only change code below this line
for (var i = 0; i < myArr.length; i++) {

   
   total += myArr[i]
   console.log(total);
}

// 99
// Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
       product *= arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}

var product= multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// 100
// Iterate with JavaScript Do...While Loops

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 5);

console.log(myArray);
