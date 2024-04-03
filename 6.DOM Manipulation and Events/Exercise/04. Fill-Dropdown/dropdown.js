function addItem() {
    const inputTxtElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.value = inputValueElement.value;
    optionElement.textContent = inputTxtElement.value;

    selectElement.appendChild(optionElement);

    inputTxtElement.value = '';
    inputValueElement.value = '';
}