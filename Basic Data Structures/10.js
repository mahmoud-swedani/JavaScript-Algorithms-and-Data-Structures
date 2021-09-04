// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem ) {
    // Only change code below this line
  
    let a = arr.indexOf(elem);
    if(a>=0){
      return true
    }else{
      return false
    }
  
    // Only change code above this line
    return a
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  