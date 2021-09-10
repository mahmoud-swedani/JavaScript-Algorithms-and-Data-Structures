// DNA Pairing
function pairElement(str) {
    let a = str.split("");
    let newa = [];
    for(let i = 0; i < a.length; i++){
      if (a[i] === "A"){
        newa.push([a[i],"T"])
        
      }else if(a[i] === "T"){
        newa.push([a[i],"A"])
  
      }else if(a[i] === "C"){
        newa.push([a[i],"G"])
  
      }else if(a[i] === "G"){
        newa.push([a[i],"C"])
  
      }else if(a[i] === "T"){
        newa.push([a[i],"A"])
  
      }
    }
    return newa;
  }
  
  console.log(pairElement("CTCTA"));