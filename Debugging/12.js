// Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
    for (let i = 0; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }
  myFunc()