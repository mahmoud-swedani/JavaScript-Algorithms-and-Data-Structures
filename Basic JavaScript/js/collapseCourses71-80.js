// 71
// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
console.log(orderMyLogic(1));

// 72
// Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny"
  } else if (num < 10 ) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"

  } else {
    return "Huge";
  }

  // Only change code above this line
}

testSize(7);

// 73
// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
    if (strokes===1){
      return names[0];
    } else if (par && strokes <= par - 2){
      return names[1];
    } else if (par && strokes === par - 1){
      return names[2];
    } else if (par && strokes=== par){
      return names[3];
    } else if (par && strokes=== par + 1){
      return names[4];
    } else if (par && strokes=== par + 2){
      return names[5];
    }else{
      return names[6];
    }
  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(4, 4));

// 74
// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;  
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// 75
// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;      

    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff(10));
console.log(switchOfStuff("s"));

// 76
// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";


  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));
console.log(sequentialSizes(10));


// 77
// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));

// 78
// Returning Boolean Values from Functions
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  
  // Only change code above this line
}

isLess(10, 15);
console.log(isLess(10, 15));


// 79
// Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0){
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
// 80
// Counting Cards
var count = 0;

function cc(card) {

  switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10 :
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;

  }

var hb = "Bet"
if (count<=0) {
  hb = "Hold"
}

  return count + " " + hb;
  // Only change code above this line
}

console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('A'));
