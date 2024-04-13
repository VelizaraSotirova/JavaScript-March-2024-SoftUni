function solve(input) {
    const baristaCount = Number(input.shift());
    const team = {};


    for(let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');
        
        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','), 
        };
    }

    let commandLine = input.shift();
    while(commandLine != 'Closed') {
        const [command, baristaName, firstArg, secondArg] = commandLine.split(' / ');
        const barista = team[baristaName];

        let shift, coffeeType;

        switch(command) {
            case 'Prepare':

                shift = firstArg;
                coffeeType = secondArg;

                if(barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`)
                }
                break;


            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${baristaName} has updated his shift to: ${shift}`);
                break;


            case 'Learn':

                coffeeType = firstArg;

                if(barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
    }
}

solve([

    '3',
    
    'Alice day Espresso,Cappuccino',
    
    'Bob night Latte,Mocha',
    
    'Carol day Americano,Mocha',
    
    'Prepare / Alice / day / Espresso',
    
    'Change Shift / Bob / night',
    
    'Learn / Carol / Latte',
    
    'Learn / Bob / Latte',
    
    'Prepare / Bob / night / Latte',
    
    'Closed']);