// Check if an Object has a Property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    let a = "Alan"in userObj; let b ="Jeff"in userObj;let c = "Sarah"in userObj; let d ="Ryan" in userObj;
    let z= a && b && c && d;
    return z
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));