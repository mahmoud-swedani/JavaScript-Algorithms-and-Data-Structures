// Sorted Union
function uniteUnique(arr) {
    let a = Array.from(arguments).slice(1);
  
    if(a.length ===1){
      let s = a[0];
      let endd = arr;
      for(let i = 0; i < s.length; i++){
        if(!endd.includes(s[i])){
          endd.push(s[i])
        }
      }
  
      return endd;
    }else if(a.length ===2){
      let g= a[0];
      let s =g.concat(a[1])
      
      let endd = arr;
      for(let i = 0; i < s.length; i++){
        if(!endd.includes(s[i])){
          endd.push(s[i])
        }
      }
  
  
      return endd;
  
    }else if(a.length ===3){
      let g= a[0];
      let ss =g.concat(a[1])
      let s =ss.concat(a[2])
      let endd = arr;
      for(let i = 0; i < s.length; i++){
        if(!endd.includes(s[i])){
          endd.push(s[i])
        }
      }
      return endd;
    }
    
  }
  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
  