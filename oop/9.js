// Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let p in canary) {
    if(canary.hasOwnProperty(p)) {
      ownProps.push(p);
    }
  }
  
  console.log(ownProps);