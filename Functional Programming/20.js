// Combine an Array into a String Using the join Method
function sentensify(str) {
    // Only change code below this line
    let a = str.split(/[-,.]/);
    return a.join(" ")
  
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");