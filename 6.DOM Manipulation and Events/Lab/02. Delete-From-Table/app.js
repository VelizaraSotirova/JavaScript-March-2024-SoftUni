function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');
    const tableRowElements = document.querySelectorAll('table#customers tbody tr');

    const resultTrElement = Array
        .from(tableRowElements)
        .find(element => element.children[1].textContent
            .includes(inputEmailElement.value)
        ); 

    if (resultTrElement) {
        resultTrElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
    inputEmailElement.value = '';
}