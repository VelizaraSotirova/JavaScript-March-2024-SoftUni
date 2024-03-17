function factorialDivison(first, second) {
    let firstResult = 1;
    let secondResult = 1;

    for(let i = 2; i <= first; i++) {
        firstResult *= i;
    }

    for(let i = 2; i <= second; i++) {
        secondResult *= i;
    }

    console.log(`${(firstResult / secondResult).toFixed(2)}`);
}

factorialDivison(5, 2);
factorialDivison(6, 2);