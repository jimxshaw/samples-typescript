// Functional Scope
// var inside function:
// - Hoisted to the top of the function
// - Usable throughout the function
// var outside function:
// - Hoisted to "top" of the global scope
// - Usable throughout the program

// All varibles declarations with var within a function will be 
// hoisted to the top of the function.
function favoriteFood1(name) {
	if (name == "James") {
		var fav = "pizza";
	}
  else {
    var fav = "unknown";
  }
  return fav;
}
// The first function actually looks like the second function 
// during execution. Even if you remove var fav to a line after 
// the return statement, it will still automatically get hoisted 
// to the top.
function favoriteFood1(name) {
  var fav; 
  if (name == "James") {
    fav = "pizza";
  }
  else {
    fav = "unknown";
  }
  return fav;
}


















