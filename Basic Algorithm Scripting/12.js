// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let NewArr = arr2.slice(0,arr2.length)
    NewArr.splice(n, 0, ...arr1);
    
    return NewArr;
    }
    
    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
    console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));