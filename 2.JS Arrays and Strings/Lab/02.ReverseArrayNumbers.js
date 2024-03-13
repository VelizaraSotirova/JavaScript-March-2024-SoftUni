function solve(n, inputArray) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(inputArray[i]);
    }

    console.log(numbers.reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);