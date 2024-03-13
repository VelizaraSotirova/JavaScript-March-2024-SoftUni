function solve(input) {
    const pattern = /#(?<word>[a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for(let match of matches) {
        console.log(match.groups.word);
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');