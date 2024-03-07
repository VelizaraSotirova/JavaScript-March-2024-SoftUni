function solve(text) {
    let words = text.match(/\b\w+\b/g);

    let upperCaseWords = words.map(function(word) {
        return word.toUpperCase();
    });

    
    console.log(upperCaseWords.join(", "));
}

solve('Hi, how are you?');
solve('hello');