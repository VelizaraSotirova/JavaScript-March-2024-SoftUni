function encodeAndDecodeMessages() {
    const firstTextAreaElement = document.getElementsByTagName('textarea')[0];
    const secondTextAreaElement = document.getElementsByTagName('textarea')[1];

    const encodeButtonElement = document.getElementsByTagName('button')[0];
    const decodeButtonElement = document.getElementsByTagName('button')[1];

    let result = [];

    encodeButtonElement.addEventListener('click', () => {
        result = []; 
        
        const receivedMessage = firstTextAreaElement.value;
        for (const letter of receivedMessage) {
            let newLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
            result.push(newLetter);
        }

        firstTextAreaElement.value = '';
        secondTextAreaElement.value = result.join('');
    });

    decodeButtonElement.addEventListener('click', (e) => {
        result = [];

        const receivedMessage = secondTextAreaElement.value;
        for (const letter of receivedMessage) {
            let newLetter = String.fromCharCode(letter.charCodeAt(0) - 1);
            result.push(newLetter);
        }

        secondTextAreaElement.value = result.join('');
        result = [];
    });
}