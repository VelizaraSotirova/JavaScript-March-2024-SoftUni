function solve(word, text) {
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if(isIncluded) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}

solve('python',
'JavaScript is the best programming language javascript');