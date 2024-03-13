function solve(input) {
    const username = input.shift();
    const correctPassword = username.split('').reverse().join('');
    let attempts = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            attempts++;
            if (attempts === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);