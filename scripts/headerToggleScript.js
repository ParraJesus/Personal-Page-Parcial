document.addEventListener("DOMContentLoaded", function() {
    const toggleMenuButton = document.getElementById("toggleMenuButton");
    const navList = document.querySelector(".header__list");

    toggleMenuButton.addEventListener("click", function() {
        navList.classList.toggle("visible");
    });
});
