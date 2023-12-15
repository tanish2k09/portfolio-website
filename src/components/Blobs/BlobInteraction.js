import { getBlob } from "./BlobOverlay";

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
    if (anchorResizeToken != null) {
      clearTimeout(anchorResizeToken);
    }

    anchorResizeToken = setTimeout(commitResize, 200);
  },
  false
);
