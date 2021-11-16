import { getBlob } from "../components/BlobOverlay";

const html = document.getElementById("html_parent");
const blob = getBlob();

function lighten() {
    blob.setDarkMode(false)
    html.classList.remove("dark");
}

function darken() {
    blob.setDarkMode(true);
    html.classList.add("dark");
}

export default function toggleAppTheme(shouldDarken) {
    if (shouldDarken) {
        darken()
    } else {
        lighten();
    }
}