// Select the <div> with the class "week"
const daysList = document.querySelector('.week');
// console.log(daysList)
console.log(daysList);

const days = document.querySelectorAll('.day');
console.log(days);

let newList = []
days.forEach(element => {
    newList.push(element.textContent) // We can also use `.innerHTML` to only get the complete part along with any HTML code.
});
console.log(newList)
