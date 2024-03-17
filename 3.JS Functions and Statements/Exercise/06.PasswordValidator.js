function isValidPassword(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
    const isStrong = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;
    
    if(!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    } 
    if(!isAlphaNumerical(password)) {
        console.log("Password must consist only of letters and digits");
    } 
    if (!isStrong(password)) {
        console.log("Password must have at least 2 digits");
    }

    if(isValidLength(password) && isAlphaNumerical(password) && isStrong(password)) {
        console.log("Password is valid");
    }
}

//isValidPassword("logIn");
isValidPassword("MyPass123");
// isValidPassword("Pa$s$s");