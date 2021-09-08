// Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom " + this.name);
  }
};

function Dog(name) { 
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


let beagle = new Dog("mahmoud");
console.log(beagle.eat());