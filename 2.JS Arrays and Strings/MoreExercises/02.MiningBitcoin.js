function calculateBitcoinPurchase(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalGold = 0;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;
    let totalMoney = 0;

    for (let i = 0; i < goldMined.length; i++) {
        if ((i + 1) % 3 !== 0) { // Check if it's not every third day
            totalGold = goldMined[i];
        } else {
            totalGold = goldMined[i] * 0.7; // Subtract 30% for theft
        }

        totalMoney += totalGold * goldPrice;
        while(totalMoney >= bitcoinPrice) {
            bitcoinsBought++;
            totalMoney -= bitcoinPrice;
            if (bitcoinsBought === 1) {
                dayOfFirstBitcoin = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${(totalMoney).toFixed(2)} lv.`);
}

calculateBitcoinPurchase([100, 200, 300]);