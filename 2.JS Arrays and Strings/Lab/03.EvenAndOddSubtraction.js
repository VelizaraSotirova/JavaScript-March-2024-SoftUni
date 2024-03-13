function solve(inputArr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        inputArr[i] = Number(inputArr[i]);
        if (inputArr[i] % 2 == 0) {
            evenSum += inputArr[i];
        }
        else {
            oddSum += inputArr[i];
        }
    }

    let diff = evenSum - oddSum;
    console.log(diff);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);