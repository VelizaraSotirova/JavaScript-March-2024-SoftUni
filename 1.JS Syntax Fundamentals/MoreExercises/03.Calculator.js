function solve(first, operator, second) {
    let result;

    switch(operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }

    console.log(result.toFixed(2));
}

solve(5, '+', 10);
solve(25.5, '-', 3);