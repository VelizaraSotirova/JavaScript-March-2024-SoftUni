function solve() {
    const textAreaInputElement = document.querySelector('#exercise textarea:first-of-type');
    const textAreaOutputElement = document.querySelector('#exercise textarea:last-of-type');
    const generateButtonElement = document.querySelector('#exercise button:first-of-type');
    const buyButtonElement = document.querySelector('#exercise button:last-of-type');
    const furnitureTableElement = document.querySelector('.table tbody');

    generateButtonElement.addEventListener('click', (e) => {
        const furnitures = JSON.parse(textAreaInputElement.value);

        for (const furniture of furnitures) {
            const imgElement = document.createElement('img');
            imgElement.src = furniture.img;
            const imageTdElement = document.createElement('td');
            imageTdElement.appendChild(imgElement);

            const pNameElement = document.createElement('p');
            pNameElement.textContent = furniture.name;
            const nameTdElement = document.createElement('td');
            nameTdElement.appendChild(pNameElement);

            const pricePElement = document.createElement('p');
            pricePElement.textContent = furniture.price;
            const priceTdElement = document.createElement('td');
            priceTdElement.appendChild(pricePElement);

            const decFactor = document.createElement('p');
            decFactor.textContent = furniture.decFactor;
            const decFactorTdElement = document.createElement('td');
            decFactorTdElement.appendChild(decFactor);

            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            const checkboxTdElement = document.createElement('td');
            checkboxTdElement.appendChild(checkboxElement);

            const furnitureTrElement = document.createElement('tr');
            furnitureTrElement.appendChild(imageTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decFactorTdElement);
            furnitureTrElement.appendChild(checkboxTdElement);

            furnitureTableElement.appendChild(furnitureTrElement);
        }
    });

    buyButtonElement.addEventListener('click', () => {
        let totalPrice = 0;
        let totalDecorationFactor = 0;
        let markedChildren = 0;
        let names = [];

        Array.from(furnitureTableElement.children)
            .forEach(furnitureTrElement => {
                const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]');
                if (!markInputElement.checked) {
                    return;
                }

                const name = furnitureTrElement.children.item(1).textContent;
                const price = Number(furnitureTrElement.children.item(2).textContent);
                const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);

                names.push(name);
                totalPrice += price;
                totalDecorationFactor += decorationFactor;
                markedChildren++;
            });

        const averageDecorationFactor = totalDecorationFactor / markedChildren;
        

        textAreaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textAreaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor}`;


    });



}