// Filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userChoiceA = books.filter((book) => (book.edition >= '2007'))
// console.log(userChoiceA)

let userChoiceB = books.filter((book) => { // When using {} braces, return is required
    return book.genre == 'Science' && book.publish >= 2009
})
// console.log(userChoiceB);

// --------------------------
// Method chaining

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbersA = numbers.map((num) => (num * 10)).map((num) => (num + 1)) // the value retuned by the left map will be given to right map
// console.log(newNumbersA);

const newNumbersB = numbers.map((num) => num / 2).filter((num) => num > 2) // filter can also be used
// console.log(newNumbersB);

// --------------------------

// Reduce function
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);

// console.log(sumWithInitial);

// Another way
const anotherSum = array1.reduce(function (arr, currVal) {
    return arr + currVal
}, 1); // Here 1 is taken as initial value for arr

// Yet another way - using arrow function

const arrowSum = array1.reduce((arr, currVal) => arr + currVal, 0)

// console.log(`arrowSum: ${arrowSum}`)

// Using objects
const cart = [
    {
        item: "Pen",
        price: 40
    },
    {
        item: "Book",
        price: 250
    },
    {
        item: "Register",
        price: 150
    },
]

const cartTotal = cart.reduce((acc, item) => acc + item.price, 0)

console.log(cartTotal)