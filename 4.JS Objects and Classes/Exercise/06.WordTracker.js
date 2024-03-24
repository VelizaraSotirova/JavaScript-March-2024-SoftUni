function solve(input) {
    const searchWords = input
        .shift()
        .split(' ')
        .reduce((result, word) => ({...result, [word]: 0}), {});


    for (const word of input) {
        if (searchWords.hasOwnProperty(word)) {
            searchWords[word] += 1;
        }
    }

    Object.entries(searchWords)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`))

}

solve([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);