import { getBlob } from "../components/BlobOverlay";

const contactSection = document.getElementById("contact_section");
const navSection = document.getElementById("nav_section");
var navDots;
const blob = getBlob();

function isSectionBound() {
    let rect = contactSection.getBoundingClientRect();

    return rect.top <= window.innerHeight / 4;
}

function show() {
    blob.cueExpansion();
    contactSection.classList.remove("opacity-0");

    navSection.classList.add("md:dark:text-semidark");
    navDots = document.getElementsByClassName("nav-dot");
    for (let index = 0; index < navDots.length; ++index) {
        navDots[index].classList.add("md:dark:bg-semidark");
    }
}

function hide() {
    blob.cueCollapse();
    contactSection.classList.add("opacity-0");

    navSection.classList.remove("md:dark:text-semidark");
    navDots = document.getElementsByClassName("nav-dot");
    for (let index = 0; index < navDots.length; ++index) {
        navDots[index].classList.remove("md:dark:bg-semidark");
    }
}

function scrollHandler() {
    if (isSectionBound()) {
        show();
    } else {
        hide();
    }
}

function attachHandler() {
    contactSection.classList.add("opacity-0");
    window.addEventListener("scroll", scrollHandler);
}
attachHandler();
