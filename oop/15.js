// Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  
  console.log(Dog.prototype.isPrototypeOf(beagle));
  