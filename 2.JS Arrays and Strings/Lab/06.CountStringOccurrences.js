function solve(str, searchedWord) {
    let counter = 0;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === searchedWord.toLowerCase()) {
            counter++;
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');
