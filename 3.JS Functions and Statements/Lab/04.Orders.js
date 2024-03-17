function solveOrder(product, quantity) {
    let totalPrice = 0;
    switch(product) {
        case 'coffee':
            totalPrice += quantity * 1.5;
            break;
        case 'water':
            totalPrice += quantity * 1.0;
            break;   
        case 'coke':
            totalPrice += quantity * 1.4;
            break;
        case 'snacks':
            totalPrice += quantity * 2;
            break; 
    }

    console.log(`${totalPrice.toFixed(2)}`);
}

solveOrder('water', 5);
solveOrder('coffee', 2);