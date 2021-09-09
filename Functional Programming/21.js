// Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
function urlSlug(title) {
  let a = title.split(/[,-\s]/g).filter(elem=> elem!=="").join("-").toLowerCase();
  
  return a
  }
  // Only change code above this line
  console.log(urlSlug(" Winter Is Coming"))