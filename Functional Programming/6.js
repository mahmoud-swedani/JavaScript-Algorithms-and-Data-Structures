// Refactor Global Variables Out of Functions
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName,a) {

	//make a copy of the argument's array
	let bookListCopy = bookList.slice(0);
	//add the bookName to the new array
	bookListCopy.push( a );
	
	//return the new modified array
	return bookListCopy;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName,as) {
	//make a copy of the argument's array
	let bookListCopy = bookName.slice(0);
	
	if( bookListCopy.indexOf( as ) >= 0 ) {
		//delet the book
		bookListCopy.splice( bookListCopy.indexOf( as ), 1 );
		
		//return the new modified array
		return bookListCopy;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(newBookList, 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);
// console.log(newBookList);
console.log(newerBookList);
// console.log(newestBookList);