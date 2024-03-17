function solve(a, b, c) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(sumResult, c) {
        return sumResult - c;
    }

    const sumResult = sum(a, b);
    const result = subtract(sumResult, c);

    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);