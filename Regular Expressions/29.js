//  Positive and Negative Lookahead
let sampleWord = "astronaut";
let sampleWord1 = "lookaheads";
let sampleWord2 = "banan1";
let sampleWord3 = "bana12";
let sampleWord4 = "abc123";
let sampleWord5 = "12345";
let sampleWord6 = "8pass99";
let sampleWord7 = "1a2bcde";
let sampleWord8 = "astr1on11aut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
let result1 = pwRegex.test(sampleWord1);
let result2 = pwRegex.test(sampleWord2);
let result3 = pwRegex.test(sampleWord3);
let result4 = pwRegex.test(sampleWord4);
let result5 = pwRegex.test(sampleWord5);
let result6 = pwRegex.test(sampleWord6);
let result7 = pwRegex.test(sampleWord7);
let result8 = pwRegex.test(sampleWord8);
console.log(result);console.log(result1);console.log(result2);console.log(result3);
console.log(result4);console.log(result5);console.log(result6);console.log(result7);
console.log(result8);
