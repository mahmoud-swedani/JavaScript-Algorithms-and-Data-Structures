// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj) {
    // Only change code below this line
    var i = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
              i++;
          }        
      
    }
    return i;
  
    
    // Only change code above this line
  }
  
  let users ={
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  countOnline(users)