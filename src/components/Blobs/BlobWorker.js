import { Blob, HALF_PI } from "./BlobOverlay.js";

export const MSG_TYPE = {
    INIT: "init",
    SET_DARK_MODE: "setDarkMode",
    SET_EXPANSION: "expansion",
    RESIZE: "resize",
    ENERGIZE: "energize",
};

const blob = new Blob(HALF_PI, HALF_PI);
const PHASE_FPS = 120;
let animationFrameId;
let lastFrameTime = 0;
const render = () => {
    blob.energize();
    blob.syncScale();

    // Update the phase of the blob with an FPS-limit
    if (performance.now() - lastFrameTime > 1000 / PHASE_FPS) {
        blob.updatePhase();
        lastFrameTime = performance.now();
    }

    // Draw the blob if necessary
    blob.updateRender();

    // Requeue the render function
    animationFrameId = requestAnimationFrame(render);
};

onmessage = function (event) {
    switch (event.data.type) {
        case MSG_TYPE.INIT:
            onInitMessage(event.data);
            break;
        case MSG_TYPE.RESIZE:
            onResizeMessage(event.data);
            break;
        case MSG_TYPE.SET_EXPANSION:
            onExpandMessage(event.data);
            break;
        case MSG_TYPE.SET_DARK_MODE:
            onSetDarkModeMessage(event.data);
            break;
        case MSG_TYPE.ENERGIZE:
            blob.reactivePx(true);
            break;
        default:
            console.log("Blob: Discarding event - Worker message missing 'type' property");
    }
};

function onInitMessage(data) {
    const { canvas, window, isDarkMode } = data;
    const ctx = canvas.getContext("2d");

    // Make sure any previous calculations are cleared
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Refresh blob attributes
    blob.setContext(ctx);
    blob.setWindow(window);
    blob.setDarkMode(isDarkMode);

    // First render frame
    animationFrameId = requestAnimationFrame(render);
}

function onResizeMessage(data) {
    const { window } = data;
    blob.setWindow(window);
}

function onExpandMessage(data) {
    const { value } = data;
    if (value) {
        blob.cueExpansion();
    } else {
        blob.cueCollapse();
    }
}

function onSetDarkModeMessage(data) {
    const { value } = data;
    blob.setDarkMode(value);
}
