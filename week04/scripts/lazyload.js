// Sets ONLY the year inside <span id="currentyear">
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Sets the last modified string inside <p id="lastModified">
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;