// Control statements in JavaScript
// Control statements are basically `if-else` and `switch`

// How to check if an object is empty

const newObject = {}

// `Object.keys()` will return an array of keys in the `newObject`
// We can then use `.length` method to check if it's empty
if (Object.keys(newObject).length == 0) {
    // console.log("This is an empty object");
}

// ---------------------------

// Nullish Coaliscing Operator
let value
value = 5 ?? 10

let value2
value2 = null ?? 10

let value3 = null ?? null ?? 20 // Multiple operators can also be used. 

// In below example, both `undefined` and `null` are cosidered equal
// Hence it will always skip the first value and pick the second value since it's the last value
let value4 = undefined ?? null

// ---------------------------
// Ternary operator
// condition ? true : false

let fruit = 'Mango'
console.log(`The fruit is ${fruit == 'banana' ? 'Banana' : 'not Banana'}`);