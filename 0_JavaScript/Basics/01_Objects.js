// How objects works and some less knows tips
// There is a term called "Simpleton" object - Any object declared literal way is never a simpleton object. However, object declared via a constructor are simpleton.


// Symbols
const mySym = Symbol("NEW"); // the `Symbol("NEW")` is used for debugging and does not affect the uniqueness of the symbol.

// Object Literals
const userObj = {
    "First Name": "Abhinav",
    "Last Name": "Sharma",
    isLoggedIn: false,
    favColor: "Black",
    [mySym]: "This is a symbol" // Symbols are not iterable and neither enumerable. Good for creating a secret element.
}

// console.log(userObj.isLoggedIn); // This is a simple way to access object elements.
// console.log(userObj["First Name"]); // This is a more refined way to access object element.
// console.log(userObj["favColor"]); // Another way to access the key. Its more consistent with the above method.
// console.log(userObj[mySym]); // The only way to access a symbol. Quotes are not allowed for symbols.

// Freeze an object
Object.freeze(userObj.favColor); // Does not work as `freeze` works on entier object and not just a part/element of it.
// Object.freeze(userObj); // Correct way to use `freeze`
userObj.favColor = "Red";

// console.log(userObj.favColor);

// Adding a function to an object
// Note: If you get and error '.... is not a function' check if you used the `freeze` method.
userObj.message = function() {
    return ("This is a function in the object");
}
userObj.newMessage = function() {
    return `Hello, ${this["First Name"]}`
}
console.log(userObj.message()); // Brakets are required if you want to execute the function.
console.log(userObj.message); // Without brackets, this will return the reference to the function.
console.log(userObj.newMessage()); // Accessing object elements using string interpolation.


