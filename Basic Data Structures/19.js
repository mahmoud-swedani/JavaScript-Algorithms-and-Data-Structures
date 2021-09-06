// Generate an Array of All Object Keys with Object.keys()
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    let arr = [];
    for (let user in obj){
      arr.push(user);
    }
    // Only change code above this line
    return arr;
  }
  
  console.log(getArrayOfUsers(users));