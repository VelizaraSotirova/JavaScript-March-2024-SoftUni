function visualizeLoadingBar(progress) {
    const percentage = progress + '%';
    const progressBar = '[' + '%'.repeat(progress / 10) + '.'.repeat(10 - progress / 10) + ']';
    if (progress < 100) {
        console.log(`${percentage} ${progressBar}`);
        console.log("Still loading...");
    } else {
        console.log(`100% Complete!`);
        console.log(`${progressBar}`);
    }
}

visualizeLoadingBar(30); // Output: 30% Still loading... [%%%.......]
visualizeLoadingBar(50); // Output: 50% Still loading... [%%%%%.....]
visualizeLoadingBar(100); // Output: 100% Complete! [%%%%%%%%%%]