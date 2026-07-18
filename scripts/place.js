document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate dynamic footer dates
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById("last-modified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 2. Wind Chill Processing
    // Updated static values to match Nigeria's weather profile in your HTML
    const tempCelsius = 30; 
    const windKmH = 10;

    // Element to display the result
    const windChillSpan = document.getElementById("wind-chill");

    if (windChillSpan) {
        // Check if conditions for viable metric wind chill calculations are met
        if (tempCelsius <= 10 && windKmH > 4.8) {
            const chillFactor = calculateWindChill(tempCelsius, windKmH);
            windChillSpan.textContent = `${chillFactor.toFixed(1)} °C`;
        } else {
            // Because 30°C > 10°C, this branch will execute and display "N/A"
            windChillSpan.textContent = "N/A";
        }
    }
});

/**
 * Calculates the wind chill factor for Metric units (°C and km/h)
 * Uses the official Environment Canada / UK Met Office metric wind chill formula.
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} The calculated wind chill factor
 */
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}