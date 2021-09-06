// Reverse a String
function reverseString(str) {
  
    var o = '';
   for (let i = str.length - 1; i >= 0; i--)
     o += str[i];
   return o;
 
 }
 
 reverseString("hello");  
 console.log(reverseString("hello"));
 