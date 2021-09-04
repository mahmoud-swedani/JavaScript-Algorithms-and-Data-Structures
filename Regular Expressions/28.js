//   Check for All or None
let favWord = "favorite";
let favWord2 = "favourite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
let result2 = favRegex.test(favWord2);
console.log(result);console.log(result2);