function solve(number) {
    let flag = true;
    let numberText = number.toString();
    let currDigit = numberText[0];
    let sum = 0;
    
    for (let i = 0; i < numberText.length; i++) {
        if (currDigit !== numberText[i]) {
            flag = false;
        } 

        currDigit = numberText[i];

        sum += Number(currDigit);
    }

    console.log(flag);
    console.log(sum);
}

solve(2222222);
solve(1234);