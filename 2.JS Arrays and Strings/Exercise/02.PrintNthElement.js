function solve(input, step) {
    let filteredArray = [];
    for(let i = 0; i < input.length; i += step) {
        filteredArray.push(input[i]);
    }
    return filteredArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));