// function solve(wordsInput, text) {
//     const words = wordsInput.split(', ');
//     let startIndex = -1;
//     let endIndex = -1;

//     for(let i = 0; i < text.length; i++) {
//         if(text[i] === '*') {
//             if(startIndex < 0) {
//                 startIndex = i;
//                 endIndex = i + 1;
//             } else {
//                 endIndex = i + 1;
//             }
//         } else {
//             if(startIndex >= 0) {
//                 let length = endIndex - startIndex;
//                 let word = words.find(w => w.length === length);
//                 text = text.replace('*'.repeat(length), word);                startIndex = -1;
//                 startIndex = -1;
//                 endIndex = -1;
//             }
//         }
//     }

//     if(startIndex >= 0) {
//         let length = endIndex - startIndex;
//         let word = words.find(w => w.length === length);
//         text = text.replace('*'.repeat(length), word);
        
//     }

//     console.log(text);
// }

// console.log(solve('great, learning',
// 'softuni is ***** place for ******** new programming languages *****'));

/**
 * 
 * @param {string} text 
 */

function fancySolve(wordsInput, text) {
    const words = wordsInput.split(', ');
    const matches = text.matchAll(/\*+/g);

    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length);
        // console.log(match[0]);
        text = text.replace(match[0], word);
    }

    console.log(text);
}

fancySolve('great, learning', 'softuni is ***** place for ******** new programming languages')