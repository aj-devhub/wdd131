document.addEventListener("DOMContentLoaded", () => {

    let count = Number(localStorage.getItem("reviewCount")) || 0;
    
    // Increment on successful review page load
    count += 1;
    
    // Save updated total back to localStorage
    localStorage.setItem("reviewCount", count);
    
    document.getElementById("reviewCount").textContent = count;

    // Footer 
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});