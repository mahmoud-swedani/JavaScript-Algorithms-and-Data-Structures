// Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let arrs = arr.slice(0);
  return arrs.sort((a,b)=> a - b);

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));