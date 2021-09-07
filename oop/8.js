// Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = new House(5)
  console.log(myHouse instanceof House);
  // Only change code below this line
  