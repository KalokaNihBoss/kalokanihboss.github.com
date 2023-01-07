const homeLink = document.querySelector("#homeLink");
const homeLinkP = document.querySelector("#homeLink p");

homeLink.addEventListener("mouseover", function () {
    // homeLinkP.classList.toggle("d-none");
    homeLinkP.classList.toggle("homeLinkAnimation");
});
