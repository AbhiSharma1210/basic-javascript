// Function to add new list item
function addLanguage(addName) {
    const listItem = document.createElement('li');
    listItem.textContent = `${addName}`; // Both textContent and innerHTML traverse the entire HTML tree.
    document.querySelector('.language').appendChild(listItem);
}

addLanguage("Solidity");
addLanguage("TypeScript");

function addLanguageOptimized(addLang) {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(addLang)); // This method directly adds the element to the required position. More optimized.
    document.querySelector('.language').appendChild(listItem);
}

addLanguageOptimized("Python")

// Function to edit an existing list item

function editList(newName, pos) {
    const target = document.querySelector(`li:nth-child(${pos})`);
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(newName))
    target.replaceWith(newItem)
}

editList("Foundry Framework", 4)

// Function to remove an existing list item
// note: the function takes in the item postion 
function removeItem(itemName) {
    const itemList = document.querySelectorAll('.language li')
    itemList.forEach(function (item) {
        if (item.textContent === itemName) item.remove()
    });
}

removeItem('Foundry Framework')