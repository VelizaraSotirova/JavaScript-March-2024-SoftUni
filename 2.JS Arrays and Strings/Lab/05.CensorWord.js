function solve(text, word) {
    // Create a regular expression to match the word globally with case insensitivity
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    
    // Find all occurrences of the word in the text
    let occurrences = text.match(regex);
    
    // If there are no occurrences, return the original text
    if (!occurrences) {
        return text;
    }
    
    // Replace each occurrence of the word with the count of '*'
    let replacedText = text.replace(regex, function(match) {
        return '*'.repeat(match.length);
    });
    
    console.log(replacedText);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');