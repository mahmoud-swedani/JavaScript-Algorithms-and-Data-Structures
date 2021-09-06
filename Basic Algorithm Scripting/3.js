// Factorialize a Number
function factorialize(num) {
  let total = 1;
  for (let i = num; i>0;i--){
    total*= i;
  }
  return total;
}
console.log(factorialize(5));