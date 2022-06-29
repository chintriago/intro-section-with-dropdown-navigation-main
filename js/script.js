// MOBILE DROPDOWN MENU
const overLay = document.getElementById("js-dark-bg-overlay");
const mobileMenu = document.getElementById("js-mobile-menu");
const mobileMenuOpen = document.getElementById("js-mobile-menu-open");
const mobileMenuClose = document.getElementById("js-mobile-menu-close");
const featuresArrow = document.getElementById("js-features-arrow");
const featuresSubMenu = document.getElementById("js-features-submenu");
const companyArrow = document.getElementById("js-company-arrow");
const companySubMenu = document.getElementById("js-company-submenu");
const featuresMenu = document.getElementById("js-features-menu");
const companyMenu = document.getElementById("js-company-menu");

// Function that toggles features arrow image up and down.
let toggleF = true;

function toggleFeaturesArrow(nameF) {
    if (toggleF) {
        nameF.src = 'images/icon-arrow-up.svg';
    } else {
        nameF.src = 'images/icon-arrow-down.svg';
    }
    toggleF = !toggleF;
};

// Function that toggles company arrow image up and down.
let toggleC = true;

function toggleCompanyArrow(nameC) {
    if (toggleC) {
        nameC.src = 'images/icon-arrow-up.svg';
    } else {
        nameC.src = 'images/icon-arrow-down.svg';
    }
    toggleC = !toggleC;
};

// Event listener that opens mobile menu.
mobileMenuOpen.addEventListener("click", function () {
    overLay.classList.add("js-block");
    mobileMenu.classList.add("js-block")
});

// Event listener that opens mobile features submenu.
featuresMenu.addEventListener("click", function () {
    featuresSubMenu.classList.toggle("js-block");
    toggleFeaturesArrow(featuresArrow);
});

// Event listener that opens mobile company submenu.
companyMenu.addEventListener("click", function () {
    companySubMenu.classList.toggle("js-block");
    toggleCompanyArrow(companyArrow);
});

// Event listener that closes mobile menu and resets submenus that
// are curently open.
mobileMenuClose.addEventListener("click", function () {
    overLay.classList.remove("js-block");
    mobileMenu.classList.remove("js-block");
    featuresSubMenu.classList.remove("js-block");
    companySubMenu.classList.remove("js-block");
    companyArrow.src = "images/icon-arrow-down.svg";
    featuresArrow.src = "images/icon-arrow-down.svg";
});

// DESKTOP DROPDOWN MENU
const desktopFeaturesMenu = document.getElementById("js-desktop-features-menu");
const desktopFeaturesSubMenu = document.getElementById("js-desktop-features-submenu");
const desktopCompanyMenu = document.getElementById("js-desktop-company-menu");
const desktopCompanySubMenu = document.getElementById("js-desktop-company-submenu");
const desktopFeaturesArrow = document.getElementById("js-desktop-features-arrow");
const desktopCompanyArrow = document.getElementById("js-desktop-company-arrow");
const urlArrowUp = "images/icon-arrow-up.svg";
const urlArrowDown = "images/icon-arrow-down.svg";

// Event listener that toggles desktop features submenu and arrow image.
// Also toggles desktop company submenu and it's arrow image if active.
desktopFeaturesMenu.addEventListener("click", function () {
    toggleFeaturesArrow(desktopFeaturesArrow);
    desktopFeaturesSubMenu.classList.toggle("js-block");
    if (desktopCompanyArrow.src === urlArrowUp) {
        desktopCompanySubMenu.classList.remove("js-block");
        desktopCompanyArrow.src = urlArrowDown;
        toggleC = true;
    };
});

// event listener that toggles desktop company submenu and arrow image.
// Also toggles desktop features submenu and it's arrow image if active.
desktopCompanyMenu.addEventListener("click", function () {
    toggleCompanyArrow(desktopCompanyArrow);
    desktopCompanySubMenu.classList.toggle("js-block");
    if (desktopFeaturesArrow.src === urlArrowUp) {
        desktopFeaturesSubMenu.classList.remove("js-block");
        desktopFeaturesArrow.src = urlArrowDown;
        toggleF = true;
    };
});
