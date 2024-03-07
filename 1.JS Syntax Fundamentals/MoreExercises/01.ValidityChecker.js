function checkDistances(x1, y1, x2, y2) {
    // Calculate distances between each point and the origin (0, 0)
    let distance1 = Math.sqrt(x1 * x1 + y1 * y1);
    let distance2 = Math.sqrt(x2 * x2 + y2 * y2);

    // Calculate distance between the two points
    let distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Check if distances are integers
    let valid1 = Number.isInteger(distance1);
    let valid2 = Number.isInteger(distance2);
    let valid3 = Number.isInteger(distance3);

    // Print the results
    if (valid1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (valid2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (valid3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

checkDistances(3, 0, 0, 4);
console.log();
checkDistances(2, 1, 1, 1);