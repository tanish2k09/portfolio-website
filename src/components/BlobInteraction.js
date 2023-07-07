import { getBlob } from "./BlobOverlay";

const widthBreakPoint = 768;
let blob = getBlob();
var anchorResizeToken = null;

/* ----------- Attach Listeners ----------- */

function commitResize() {
  blob.updateValues();
  anchorResizeToken = null;
}

window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth < widthBreakPoint) {
      return;
    }

    if (anchorResizeToken != null) {
      clearTimeout(anchorResizeToken);
    }

    anchorResizeToken = setTimeout(commitResize, 200);
  },
  false
);
