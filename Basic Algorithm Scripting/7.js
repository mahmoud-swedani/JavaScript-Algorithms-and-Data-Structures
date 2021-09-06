// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let a = "";
    for (let i= 1;i<=num;i++){
      a += str;
    }
    return a;
  }
  
  console.log(repeatStringNumTimes("abc", 3));