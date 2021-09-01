//  Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);