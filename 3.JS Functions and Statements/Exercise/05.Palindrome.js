// function isPalindrome(number) {
//     const numStr = number.toString();
//     const reversedNumStr = numStr.split('').reverse().join('');
//     return numStr === reversedNumStr;
// }

function checkPalindromes(arr) {
    function isPalindrome(number) {
        const numStr = number.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        return numStr === reversedNumStr;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(isPalindrome(arr[i]));
    }
}

checkPalindromes([123,323,421,121]);