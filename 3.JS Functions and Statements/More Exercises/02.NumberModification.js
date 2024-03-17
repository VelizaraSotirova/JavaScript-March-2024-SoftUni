function modifyNumber(number) {
    let numberString = number.toString();
    let sum = 0;
    let count = 0;

    // Calculate the sum of digits and count of digits
    for (let digit of numberString) {
        sum += parseInt(digit);
        count++;
    }

    // Calculate the initial average
    let average = sum / count;

    // Keep appending 9 until the average becomes more than or equal to 5
    while (average < 5) {
        numberString += '9';
        sum += 9; // Add 9 to the sum
        count++; // Increment count of digits
        average = sum / count; // Recalculate average
    }

    return parseInt(numberString);
}

// Example usage:
console.log(modifyNumber(101)); // Output: 1019999
console.log(modifyNumber(5835)); // Output: 5835