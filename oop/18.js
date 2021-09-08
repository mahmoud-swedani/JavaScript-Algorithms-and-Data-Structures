// Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  // Only change code below this line
  
  let duck = Object.create(Animal.prototype);; // Change this line
  let beagle = Object.create(Animal.prototype);; // Change this line
  
  console.log(duck.eat());
  console.log(duck instanceof Animal);
  