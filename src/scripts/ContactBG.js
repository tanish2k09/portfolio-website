import { getBlob } from "../components/BlobOverlay";

const contactSection = document.getElementById("contact_section");
const blob = getBlob();

function isSectionBound() {
  let rect = contactSection.getBoundingClientRect();

  return rect.top <= window.innerHeight / 4;
}

function show() {
  blob.cueExpansion();
  contactSection.classList.remove("opacity-0");
}

function hide() {
  blob.cueCollapse();
  contactSection.classList.add("opacity-0");
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
