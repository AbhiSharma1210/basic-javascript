// Arrow Functions and `this` keyword

// `this` keyword refer to current context
const userData = {
    userName: "Abhinav",
    id: 123,
    message: function () {
        console.log(`${this.userName}, greetings`);
    }
}

// console.log(userData.message())
userData.userName = "Solblaze"
// console.log(userData.message())

// ----------------------------

// Arrow function
// This is basic syntax or Explicit return
const data = () => {
    let number = 100
    // console.log(number)
}

data()

// Implicit return
const addNumbers = (num1, num2) => num1 + num2

const returnObject = () => ({ Name: "Abhinav", id: 123 }) // If returnin an object, it should be enclosed in ()

console.log(returnObject())

