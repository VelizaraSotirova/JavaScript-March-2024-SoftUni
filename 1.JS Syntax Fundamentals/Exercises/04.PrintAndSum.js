function solve(n1, n2) {
    let sum = 0;
    let numbers = "";
    for(let i = n1; i <= n2; i++) {
        numbers += ` ${i}`;
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);