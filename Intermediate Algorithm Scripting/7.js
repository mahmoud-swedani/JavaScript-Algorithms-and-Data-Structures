// Search and Replace
function myReplace(str, before, after) {
    function isUpper(asas) {
      return !/[a-z]/.test(asas) && /[A-Z]/.test(asas);
  }
    if(isUpper(before.charAt(0))){
    let upp = after.replace(after[0],after.charAt(0).toUpperCase());
    let a = str.replace(before,upp)
    return a;
    }else{
    let upp = after.replace(after[0],after.charAt(0).toLowerCase());
    let a = str.replace(before,upp)
    return a;
    }
  
    
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  