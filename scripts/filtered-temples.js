const menu = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    navigation.classList.toggle("open");
});

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Array of Temple Objects (Original 7 + 3 Additional)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Chicago Illinois",
        location: "4151 W Lake Ave Glenview, Illinois 60025-1240 United States",
        dedicated: "1985, August, 13",
        area: 37062,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "57 Independence Ave North Ridge P.M.B. CT 209, Cantonments",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Auckland New Zealand",
        location: "19 Redoubt Road Goodwood Heights Auckland 2105 New Zealand",
        dedicated: "2025, April, 13",
        area: 45456,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
    }
];



// DOM element references for temple cards
const container = document.querySelector("#temple-cards");
const pageHeading = document.querySelector("main h2");

// Helper function to extract dedication year as an integer
function getYear(dedicatedString) {
  return parseInt(dedicatedString.split(",")[0].trim());
}

// Function to generate dynamic temple cards
function createTempleCard(filteredTemples) {
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

// Navigation event listeners for filtering
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Home";
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Old Temples";
  const oldTemples = temples.filter((t) => getYear(t.dedicated) < 1900);
  createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "New Temples";
  const newTemples = temples.filter((t) => getYear(t.dedicated) > 2000);
  createTempleCard(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Large Temples";
  const largeTemples = temples.filter((t) => t.area > 90000);
  createTempleCard(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  pageHeading.textContent = "Small Temples";
  const smallTemples = temples.filter((t) => t.area < 10000);
  createTempleCard(smallTemples);
});

// Existing footer date setup code
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Initial render call on page load
createTempleCard(temples);