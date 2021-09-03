//  Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4,29}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result);