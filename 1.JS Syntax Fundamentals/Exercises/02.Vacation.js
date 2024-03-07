function solve(peopleCount, groupType, weekDay) {
    let price = 0;
    if (groupType === 'Students') {
        if (weekDay === 'Friday') {
            price = 8.45 * peopleCount;
        }
        else if (weekDay === 'Saturday') {
            price = 9.8 * peopleCount;
        }
        else if (weekDay === 'Sunday') {
            price = 10.46 * peopleCount;
        }

        if (groupType === 'Students' && peopleCount >= 30) {
            price -= price * 0.15;
        }
    }
    else if (groupType === 'Business') {
        if (weekDay === 'Friday') {
            price = 10.9 * peopleCount;
            if (peopleCount >= 100) {
                price -= 10 * 10.9;
            }
        }
        else if (weekDay === 'Saturday') {
            price = 15.6 * peopleCount;
            if (peopleCount >= 100) {
                price -= 10 * 15.6;
            }
        }
        else if (weekDay === 'Sunday') {
            price = 16 * peopleCount;
            if (peopleCount >= 100) {
                price -= 10 * 16;
            }
        }
    }
    else if (groupType === 'Regular') {
        if (weekDay === 'Friday') {
            price = 15 * peopleCount;
        }
        else if (weekDay === 'Saturday') {
            price = 20 * peopleCount;
        }
        else if (weekDay === 'Sunday') {
            price = 22.5 * peopleCount;
        }

        if (groupType === 'Regular' && (peopleCount >= 10 && peopleCount <= 20)) {
            price -= price * 0.05;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");