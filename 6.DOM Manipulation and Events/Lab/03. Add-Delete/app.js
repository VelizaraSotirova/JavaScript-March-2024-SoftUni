function addItem() {
    const inputItemEl = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');
    
    //Create new item element 
    const newInputElement = document.createElement('li');
    newInputElement.textContent = inputItemEl.value;

    //Create link element
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    //Add event to link element
    deleteLinkElement.addEventListener('click', () => {
        newInputElement.remove();
    });

    //Append link element to new item element
    newInputElement.appendChild(deleteLinkElement);

    //Append new item element to list
    itemsListElement.appendChild(newInputElement);

    //Clear input
    inputItemEl.value = '';

}