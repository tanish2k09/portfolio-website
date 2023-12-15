import { getBlob } from "../components/Blobs/BlobOverlay";
import { toggleLogosDarkMode } from "../components/LogoOverlay";

const html = document.getElementById("html_parent");
const blob = getBlob();

function lighten() {
    html.classList.remove("dark");
}

function darken() {
    html.classList.add("dark");
}

export default function toggleAppTheme(shouldDarken) {
    if (shouldDarken) {
        darken();
    } else {
        lighten();
    }

    blob.setDarkMode(shouldDarken);
    toggleLogosDarkMode(shouldDarken);
}
