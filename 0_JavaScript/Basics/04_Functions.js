// Functions
// How to take unknown number of arguments

function cartPrice(...cartItems) { // ... here is called `rest` operator. It bundles any number of arguments into 1 array.
    return cartItems
}

// console.log(cartPrice(100, 200, 300, 400));

// -----------------------------------------------

// Another example
function newFunction(numA, numB, ...other) {
    return (`numA: ${numA}\nnumB: ${numB}\nOther: ${other}`);
}

// console.log(newFunction(100, 200, 300, 400, 500))

// -----------------------------------------------

// Handling Objects in functions

const objectA = {
    name: "Abhinav",
    id: 1234
}

function handleObject(anyObject) {
    return (`Name is ${anyObject.name} and id is ${anyObject.id}`)
}

handleObject(objectA) // Send the object as argument. IMPORTANT!!

// We can also send object elements directly as argument

handleObject({
    name: "Direct Object",
    id: 1235
})

// -----------------------------------------------

newArray = [100, 200, 300, 400]
function returnSecondValue(anyArray) {
    return anyArray[1]
}

// console.log(`This is the second element in array ${returnSecondValue(newArray)}`)

// -----------------------------------------------

// Scopes in functions
function one() {
    const name = "Abhinav"

    function two() {
        const job = "BlockChain Developer"

        console.log(`Name: ${name}`)
    }

    // console.log(`Job: ${job}`)

    two()
}

one();

// -----------------------------------------------

// Immediately Invoked Function Expressions - IIFE

// Its mainly used to help avoid global scope pollution. Eg: any variable declared with var that can lead into the global scope.

(function randomFunction() { // This is also called a named IIFE
    let number = 10
    var variable = 20
    console.log(`The sum is ${variable + number}`)
})();

// console.log("This is variable", variable); // This will give an error
// Arrow functions can also be used as IIFE

(() => {
    console.log(`This is an arrow function`)
})();

// We can also add arguments in the IIFE function

((name) => {
    console.log(`Welcome, ${name}`)
})("Abhinav")
