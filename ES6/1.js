// Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
  return quote
}
catTalk();