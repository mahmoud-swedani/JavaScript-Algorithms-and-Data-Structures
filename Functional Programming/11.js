// Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    var newArray = anim.slice(beginSlice, endSlice);
    return newArray;
  
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);