function solve(first, second, operation) {
    switch (operation) {
        case '+':
            console.log(first + second);
            break;
        case '-':
            console.log(first - second);
            break;
        case '*':
            console.log(first * second);
            break;
        case '/':
            console.log(first / second);
            break;
        case '%':
            console.log(first % second);
            break;
        case '**':
            console.log(first ** second);
            break;
    }
}

solve(5, 6, '+');
solve(3, 5.5, '*');