function carWash(commandInput) {
    //command = commandInput.split(', ');
    let value = 0;
    
    while(commandInput.length > 0) {
        currCommand = commandInput.shift();
        if (currCommand == 'soap') {
            value += 10;
        } else if (currCommand == 'water') {
            value += value * 0.2;
        } else if (currCommand == 'vacuum cleaner') {
            value += value * 0.25;
        } else if (currCommand == 'mud') {
            value -= value * 0.1;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);