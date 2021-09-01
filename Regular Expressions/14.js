//  Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z]*?1>/; // Change this line
let result = text.match(myRegex);
console.log(result);