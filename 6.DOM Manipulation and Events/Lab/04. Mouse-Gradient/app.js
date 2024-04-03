function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        //const rect = event.target.getBoundingClientRect();
        //const elementWidth = rect.width;

        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;

        const progress = Math.floor((currentWidth / elementWidth) * 100);

        resultElement.textContent = `${progress}%`;
    });
}