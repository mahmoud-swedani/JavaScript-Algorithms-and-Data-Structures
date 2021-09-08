// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
  
   this.getWeight  = function() { 
      return weight;
    };
  }
  
  let ducky = new Bird();
  console.log(ducky.getWeight ());