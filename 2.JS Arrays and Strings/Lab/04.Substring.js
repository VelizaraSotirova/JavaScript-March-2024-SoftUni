function solve(str, start, count) {
    let substringString = str.substring(start, start + count);
    console.log(substringString);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);