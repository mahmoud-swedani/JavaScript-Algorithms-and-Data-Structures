// Where do I Belong
function getIndexToIns(arr, num) {
    let arr1=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<num){
      arr1++
    }
  }
  return arr1;
}

getIndexToIns([40, 60], 50);