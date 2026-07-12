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