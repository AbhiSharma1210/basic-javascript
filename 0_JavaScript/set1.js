let newArray = [];
let input = Number(prompt("Enter a number: "));
newArray.push(input);
do{
input = prompt("Enter a number: ");
if (isNaN(input)) {
    console.log(`${input} is not a number`);
}
else if(input == 0) {
    break;
}
else {
    newArray.push(Number(input));
}
console.log("The new array is: \m", newArray);
// cont = prompt(`Do you want to enter a new number:('y' for yes):`);
} while (Number(input) != 0)
// newArray.pop((newArray.length)-1)
console.log("The final array is: \n", newArray);
// Filter Function
// const filterFunction = (element) => {
//     return element%10 === 0;
// }

// let filterArray = newArray.filter(filterFunction)

// Map Function
const mapFunction = (element) => {
    return element*element;
}
let mapArray = newArray.map(mapFunction);
console.log("Array after mapping in new array: \n", mapArray);

// Reduce function
let reduceArray = newArray.reduce((num1, num2) => {
    return num1 * num2;
});
console.log("Array after using reduce: \n", reduceArray);