// 31
// Use Bracket Notation to Find the First Character in a String
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 32
// Understand String Immutability
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
console.log(myStr);

// 33
// Use Bracket Notation to Find the Nth Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
console.log(thirdLetterOfLastName)

// 34
// Use Bracket Notation to Find the Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
console.log(lastLetterOfLastName)

// 35
// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
console.log(secondToLastLetterOfLastName);
// 36
// Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myNoun + ", " + myAdjective + ", " + myVerb + ", " + ", " + myAdverb  ; // Change this line
// Only change code above this line

console.log(wordBlanks);

// 37
// Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
var myArray = ["mahmoud", 5, "kasim", 4, 7, 9];

console.log(myArray);

// 38
// Nest one Array within Another Array
// Only change code below this line
var myArray = [["Bulls", 23], ["White Sox", 45]];
// 39
// Access Array Data with Indexes
var myArray = [50,60,70];
myArray[1];
var myData = myArray[0];

console.log(myData);

// 40
// Modify Array Data With Indexes
// Setup
var myArray = [18,64,99];

myArray[0] = 45;
// Only change code below this line
console.log(myArray);