function setSolve(input) {
    const parkingLot = new Set();
    
    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parkingLot.add(carNumber)
            : parkingLot.delete(carNumber);
    }

    if (parkingLot.size < 1) {
        console.log('Parking Lot is Empty');
    }

    Array.from(parkingLot.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

setSolve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);