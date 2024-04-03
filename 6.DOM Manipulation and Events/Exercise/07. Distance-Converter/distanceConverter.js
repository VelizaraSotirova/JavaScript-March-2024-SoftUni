function attachEventsListeners() {
    const inputDistanceElement = document.getElementById('inputDistance');
    const outputDistanceElement = document.getElementById('outputDistance');

    const inputUnitsElements = document.getElementById('inputUnits');
    const outputUnitsElements = document.getElementById('outputUnits');

    const convertButtonElement = document.getElementById('convert');

    const convertionRatesFromMeter = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi:1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254,
    };

    convertButtonElement.addEventListener('click', () => {
        const convertFrom = inputUnitsElements.value;
        const convertTo = outputUnitsElements.value;

        const valueInMeters = inputDistanceElement.value * convertionRatesFromMeter[convertFrom];
        const convertedValue = valueInMeters / convertionRatesFromMeter[convertTo];

        outputDistanceElement.value = convertedValue;
    });



}