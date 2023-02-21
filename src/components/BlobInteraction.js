import { getBlob, POLL_INTERVAL } from "./BlobOverlay";

const widthBreakPoint = 768;
let blob = getBlob();
var anchorResizeToken = null;


/* ----------- Attach Listeners ----------- */

function commitResize() {
    blob.updateValues();
    console.log(`Resized diagonal length is now ${blob.getDiagonal()}`);
    console.log(`Resized base radius is now ${blob.baseRadius}`);
    anchorResizeToken = null;
}

window.addEventListener("resize", function (event) {
    if (window.innerWidth < widthBreakPoint) {
        return;
    }

    if (anchorResizeToken != null) {
        clearTimeout(anchorResizeToken);
    }

    anchorResizeToken = setTimeout(commitResize, 200);
}, false);

/* ----------- Attach Mouse Reaction ----------- */

function motionEnergyInteraction() {
    var distance = 0;

    document.onmousemove = function (e) {
        distance += Math.hypot(e.movementX, e.movementY);
    };

    setInterval(() => {
        // Here we calculate the threshold for minimum movement required for energy gain
        // This differential is calculated PER UPDATE - which in this case occurs
        // as often as the function is called (POLL_INTERVAL)
        // READ: 20% of the radius covered within POLL_INTERVAL seconds
        let threshold = blob.baseRadius * 0.2;
        let isAboveThreshold = Math.abs(distance) > threshold;

        blob.reactivePx(isAboveThreshold);
        distance = 0;
    }, POLL_INTERVAL);
}

motionEnergyInteraction();
