//  Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /^(Franklin\sD.\s|Eleanor )+R(oo)sevelt$/; // Change this line
let result = myRegex.test(myString);
; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);