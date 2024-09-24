// for-of loop

const arrayA = [1, 2, 3, 4, 5]

let total = 0
for (const num of arrayA) {
    total += num
    // console.log(`The total now is: ${total}`);
}

// ----------------------
// Maps
// Maps hold only unique values, any redundant key-value will be eliminated
const userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["isLoggedIn", true]
]);
// console.log(userMap.get("name"));  // Accessing a value by key: Output: "John"

// we can also use the following to add value to map
userMap.set('country', 'India')

// console.log(userMap);

for (const [key, value] of userMap) {
    // console.log(key, ":", value);
}

// ---------------------

// for..in loops
const objectA = {
    id: 1234,
    name: "Abhinav",
    isLoggedIn: true,
    email: "a@gmail.com"
}

for (const keys in objectA) {
    // console.log(`${keys} in objectA has value: ${objectA[keys]}`);

}

for (const keys in userMap) {
    // console.log(keys) // cannot use for..in to iterate maps
}

// forEach loop

const languages = ["Hindi", "English", "Japanese", "Spanish", "French"]

// languages.forEach(function (item) {
//     // console.log(item)
// })

// languages.forEach((item) => { // Arrow function can also be used
//     // console.log(item)
// })
const coding = [
    {
        name: "Python",
        id: "py"
    },
    {
        name: "Solidity",
        id: "sol"
    },
    {
        name: "typescript",
        id: "ts"
    }
]
// function printItem(item) {
//     console.log(item)
// };
// languages.forEach(printItem)

coding.forEach((item) => {
    console.log(item.name);
})