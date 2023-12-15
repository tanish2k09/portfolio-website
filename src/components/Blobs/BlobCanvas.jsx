import { useRef, useEffect, useCallback } from "react";

const fps = 120;

const BlobCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        let lastFrameTime = null;

        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const blob = props.useBlob();

            // Refresh blob attributes
            blob.setContext(ctx)
            blob.energize();
            blob.syncScale();

            // Draw the blob if necessary
            blob.update();

            // Update the phase of the blob with an FPS-limit
            if (lastFrameTime == null || performance.now() - lastFrameTime > 1000 / fps) {
                blob.updatePhase()
                lastFrameTime = performance.now();
            }

            // Requeue the render function
            animationFrameId = requestAnimationFrame(render);
        }

        // First render frame
        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, []);

    return (
        <canvas id={props.canvasId} className={props.canvasClasses} ref={canvasRef} />
    );
}

export default BlobCanvas;