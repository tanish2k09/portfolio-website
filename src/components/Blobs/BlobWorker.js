import { Blob, HALF_PI } from "./BlobOverlay.js";


onmessage = function (event) {
    // TODO: add an enum to support switch statements
    switch(event.data.type) {
        case "init":
            onInitMessage(event.data);
            break;
        // TODO: handle future cases: when window resizes or theme changes
        default:
            console.log("Worker message missing 'type' property");
    }
}

function onInitMessage(data) {
    const fps = 120;
    let animationFrameId;
    let lastFrameTime = null;

    const { canvas, window, isDarkMode } = data;
    const ctx = canvas.getContext("2d");
    const blob = new Blob(HALF_PI, HALF_PI);

    const render = () => {
        // Refresh blob attributes
        blob.setContext(ctx);
        blob.setWindow(window);
        blob.setDarkMode(isDarkMode);
        blob.energize();
        blob.syncScale();

        // Update the phase of the blob with an FPS-limit
        if (lastFrameTime == null || performance.now() - lastFrameTime > 1000 / fps) {
            blob.updatePhase();
            lastFrameTime = performance.now();
        }

    // Draw the blob if necessary
        blob.updateRender();

        // Requeue the render function
        animationFrameId = requestAnimationFrame(render);
    };

    // First render frame
    animationFrameId = requestAnimationFrame(render);
}
