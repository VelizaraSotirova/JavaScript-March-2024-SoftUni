function solve(input) {
    const parameters = JSON.parse(input);
    let entries = Object.entries(parameters);

    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')