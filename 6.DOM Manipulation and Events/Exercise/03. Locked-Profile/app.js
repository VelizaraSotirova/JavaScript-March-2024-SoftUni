function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {
        const showMoreButton = profileElement.querySelector('button');
        const lockRatioElement = profileElement.querySelector('input[type=radio][value=lock]');

        showMoreButton.addEventListener('click', () => {
            if(lockRatioElement.checked) {
                return;
            }

            const additionInformationElement = showMoreButton.previousElementSibling;
            
            if(showMoreButton.textContent === 'Show more') {
                additionInformationElement.style.display = 'block';
                showMoreButton.textContent = 'Hide it';
            } else {
                additionInformationElement.style.display = 'none';   
                showMoreButton.textContent = 'Show more';
            }
        }); 
    }
}