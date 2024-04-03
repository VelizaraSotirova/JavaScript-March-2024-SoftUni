function solve() {
    const addProductButtonElements = document.querySelectorAll('button.add-product');
    const textArea = document.querySelector('textarea');
    const checkoutButtonElement = document.querySelector('button.checkout');
    let totalPrice = 0;
    let uniqueProducts = {};

    for (const buttonElement of addProductButtonElements) {
        const productElement = buttonElement.parentElement.parentElement;

        buttonElement.addEventListener('click', () => {
            const productTitle = productElement.querySelector('.product-title').textContent;
            const productPrice = Number(productElement.querySelector('.product-line-price').textContent);
            totalPrice += productPrice;
            uniqueProducts[productTitle] = true;

            textArea.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    }

    checkoutButtonElement.addEventListener('click', (event) => {
        Array
            .from(addProductButtonElements)
            .forEach(buttonElement => buttonElement.setAttribute('disabled', true));
    

        event.target.setAttribute('disabled', 'disabled');
        const list = Object.keys(uniqueProducts).join(', ');

        textArea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
    });
}