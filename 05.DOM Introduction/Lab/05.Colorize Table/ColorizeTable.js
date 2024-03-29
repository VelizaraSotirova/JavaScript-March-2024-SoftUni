function colorize() {
    const evenRowElemments = document.querySelectorAll('table tr:nth-child(2n)');

    for (let row of evenRowElemments) {
        row.style.backgroundColor = 'teal';
    }
}