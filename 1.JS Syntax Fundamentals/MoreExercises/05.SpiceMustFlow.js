function calculateSpiceYield(startingYield) {
    const minimumYield = 100;
    let totalSpice = 0;
    let days = 0;

    while (startingYield >= minimumYield) {
        totalSpice += startingYield;
        startingYield -= 10;
        days++;
        totalSpice -= 26; // Spice consumed by workers at the end of the shift

        if (totalSpice < 26) {
            // Not enough spice to cover additional consumption
            break;
        }
    }

    // Deduct additional consumption when the mine is exhausted
    totalSpice -= 26 * Math.min(days, 1);

    // Print the results
    console.log(days);
    console.log(totalSpice);
}

// Example usage:
calculateSpiceYield(111);
calculateSpiceYield(450);