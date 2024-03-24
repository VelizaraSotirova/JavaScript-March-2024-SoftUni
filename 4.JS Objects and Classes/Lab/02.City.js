function sovle(city) {
    const parameters = Object.entries(city);

    for(let [key, value] of parameters) {
        console.log(`${key} -> ${value}`);
    }
}

sovle({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000" });