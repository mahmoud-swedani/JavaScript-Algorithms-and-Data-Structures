// Find the Longest Word in a String
function findLongestWordLength(str) {
  let a = /\w+/g;
  let n = str.match(a)
  let max = n[0].length;
  for (let i=0; i<n.length;i++){
     if (n[i].length > max) {
      max = n[i].length;
     }
                
  }
  return max;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));