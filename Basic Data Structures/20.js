// Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    let add = userObj.data.friends.push(friend);
    let result = user.data.friends;
    // Only change code above this line
    return result;
    
  }
  
  console.log(addFriend(user, 'Pete'));
  console.log(user.data.friends);