// Objects part 2

// Merging different objects

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "c", 4: "d"};

// This is a traditional way to merge 2 or more objects.
// The {} in the assign is used to define a new empty target object
// Object.assign(target, source)
const newObj = Object.assign({}, obj1, obj2);
// console.log("New object using assign method: ", newObj);

// Modern way to merge 2 or more objects.
// Use `spread` operator similar to that in array.
const newObj2 = {...obj1, ...obj2}
// console.log("New object using spread operator: ", newObj2);

const userData = {
    name: "Abhinav Sharma",
    email: "email@gmail.com",
    isLoggedIn: false
}

// following methods returns an array
// // very useful when working with production data
// console.log(Object.keys(userData));
// console.log(Object.values(userData));
// console.log(Object.entries(userData)); // This is very rarely used

// console.log(userData.hasOwnProperty('name'))

// Object de-structure
// Instead of using `userData.name` at 100 places we can use something as below.
const {isLoggedIn: Login} = userData;
console.log(Login);