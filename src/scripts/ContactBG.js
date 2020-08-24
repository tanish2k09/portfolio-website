import { getBlob } from "../components/BlobOverlay";

const contactSection = document.getElementById("contact_section");
const blob = getBlob();
const breakpoint = 768;

var isAttached = false;


function isSectionBound() {
    let rect = contactSection.getBoundingClientRect();

    return (
        rect.top <= (window.innerHeight / 4)
    );
}

function show() {
    blob.cueExpansion()
    contactSection.classList.remove("opacity-0");
}

function hide() {
    blob.cueCollapse();
    contactSection.classList.add("opacity-0");
}

function scrollHandler() {
    isAttached = true;
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

function detachHandler() {
    window.removeEventListener("scroll", scrollHandler);
    isAttached = false;
}

function setupMobile() {
    show();
    blob.cueCollapse();
}

window.addEventListener("resize", updateLayout);

function updateLayout() {
    if (isAttached && window.innerWidth < breakpoint) {
        detachHandler();
        setupMobile();
    } else if (!isAttached && window.innerWidth >= breakpoint) {
        attachHandler();
    }
}

updateLayout();