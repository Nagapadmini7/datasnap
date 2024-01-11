function toggleNavIcons() {
    var navItems = document.getElementById("navItems");
    var icons = document.querySelectorAll("#navItems > i");

    if (navItems.style.display === "flex") {
        navItems.style.display = "none";
        icons.forEach(function(icon) {
            icon.style.display = "none";
        });
    } else {
        navItems.style.display = "flex";
        icons.forEach(function(icon) {
            icon.style.display = "block";
        });
    }

    var toggleButton = document.querySelector(".toggle-button");
    toggleButton.classList.toggle("active");
}
