import { useRef, useEffect } from "react";

const BlobCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);
    let worker = props.useWorker();

    useEffect(() => {
        const canvas = canvasRef.current;
        const offscreen = canvas.transferControlToOffscreen();
        const initBlobMessage = {
            type: "init",   // TODO: make htis an enum
            canvas: offscreen,
            window: {
                devicePixelRatio: window.devicePixelRatio,
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
            },
            isDarkMade: localStorage.theme === "dark" || (
                !("theme" in localStorage) 
                && window.matchMedia("(prefers-color-scheme: dark)").matches
            ),
        };
        worker.postMessage(initBlobMessage, [offscreen]);

        return () => {
            // TODO: Potentially figure out how to do this on the web worker
            // window.cancelAnimationFrame(animationFrameId)
            worker.terminate();
        }
    }, [worker]);

    return (
        <canvas id={props.canvasId} className={props.canvasClasses} ref={canvasRef} />
    );
}

export default BlobCanvas;