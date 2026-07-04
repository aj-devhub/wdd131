// Display the current year
const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;