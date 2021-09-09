// Sum All Numbers in a Range
function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let s = 0;
    for(let i = min; i<= max; i++){
      s+= i
    }
    return s
  }
  
  console.log(sumAll([1, 4]));