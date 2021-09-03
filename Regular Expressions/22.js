//  Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][A-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result);