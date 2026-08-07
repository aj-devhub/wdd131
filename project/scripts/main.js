// Array of objects representing trail data using local image paths
const trails = [
  {
    id: "t1",
    name: "Pine Valley Loop",
    category: "hiking",
    distance: "4.2 miles",
    image: "images/pine-valley-loop.jpg"
  },
  {
    id: "t2",
    name: "Ridge Crest Trail",
    category: "biking",
    distance: "8.5 miles",
    image: "images/ridge-crest-trail.jpg"
  },
  {
    id: "t3",
    name: "Aspen Grove Path",
    category: "hiking",
    distance: "2.1 miles",
    image: "images/aspen-grove-path.jpg"
  }
];

// Function 1: Render trail cards using array methods and template literals
function renderTrails(trailList, targetContainerId) {
  const container = document.querySelector(targetContainerId);
  if (!container) return;

  container.innerHTML = ""; // Clear existing contents

  trailList.forEach((trail) => {
    const isSaved = getSavedFavorite() === trail.id;
    const cardHTML = `
      <article class="card">
        <img src="${trail.image}" alt="${trail.name}" loading="lazy">
        <h3>${trail.name}</h3>
        <p>Category: ${trail.category}</p>
        <p>Distance: ${trail.distance}</p>
        <button onclick="saveFavorite('${trail.id}')">
          ${isSaved ? "Saved as Favorite ★" : "Save Favorite"}
        </button>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

// Function 2: Filter trail array based on select menu choice
function handleFilterChange(event) {
  const selectedCategory = event.target.value;
  if (selectedCategory === "all") {
    renderTrails(trails, "#trail-grid");
  } else {
    const filtered = trails.filter((t) => t.category === selectedCategory);
    renderTrails(filtered, "#trail-grid");
  }
}

// Function 3: Manage localStorage state for favorites
function saveFavorite(trailId) {
  localStorage.setItem("favoriteTrail", trailId);
  if (document.querySelector("#trail-grid")) {
    renderTrails(trails, "#trail-grid");
  } else if (document.querySelector("#featured-container")) {
    renderTrails(trails.slice(0, 2), "#featured-container");
  }
}

function getSavedFavorite() {
  return localStorage.getItem("favoriteTrail") || "";
}

// Function 4: Dynamically set current year in the footer
function setCurrentYear() {
  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = `${currentYear}`;
  }
}

// Initialization on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically set footer year across all pages
  setCurrentYear();

  // Home Page logic
  if (document.querySelector("#featured-container")) {
    renderTrails(trails.slice(0, 2), "#featured-container");
  }

  // Explore Page logic
  if (document.querySelector("#trail-grid")) {
    renderTrails(trails, "#trail-grid");
    const filterSelect = document.querySelector("#category-filter");
    if (filterSelect) {
      filterSelect.addEventListener("change", handleFilterChange);
    }
  }
});