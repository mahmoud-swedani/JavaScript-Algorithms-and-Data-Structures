// Implement map on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  	for( let x = 0; x < s.length; x++ ) {
		newArray.push( s[x] * 2 );
	}
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s)