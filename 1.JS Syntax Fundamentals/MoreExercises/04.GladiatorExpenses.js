function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let timesLost;

    
    if (lostFights % 2 >= 0) {
        timesLost = Math.floor(lostFights / 2);
        totalPrice += timesLost * helmetPrice;
    }
    if (lostFights % 3 >= 0) {
        timesLost = Math.floor(lostFights / 3);
        totalPrice += timesLost * swordPrice;
    }
    if (lostFights % 6 >= 0) {
        timesLost = Math.floor(lostFights / 6);
        totalPrice += timesLost * shieldPrice;
    }
    if (lostFights % 12 >= 0) {
        timesLost = Math.floor(lostFights / 12);
        totalPrice += timesLost * armorPrice;
    }


    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
console.log();
solve(23, 12.50, 21.50, 40, 200);