// The let keyword in ES6 has block scope. A block is generally 
// defined as the closest set of curly braces. For example, in 
// the function below the first let is only scoped to the if {} 
// while the second let is only scoped to else {}. The fav in 
// the return statement doesn't refence anything at all and so 
// typescript notices an error. 

function favoriteFood1(name) {
	if (name == "James") {
		let fav = "pizza";
	}
	else {
		let fav = "unknown";
	}
	return fav;
}

// Also, the let keyword does not hoist. Previously with var, 
// var fav would be hoisted to the top of the function but not 
// here with let. 
function favoriteFood2(name) {
	if (name == "James") {
		fav = "pizza";
	}
	else {
		fav = "unknown";
	}
	return fav;
	let fav;
}

// Essentially a variable declared with let cannot 
// be used until the let declaration has been hit. 
function favoriteFood3(name) {
	let fav;
	if (name == "James") {
		fav = "pizza";
	}
	else {
		fav = "unknown";
	}
	return fav;
}













