import { useRef, useEffect } from "react";

import { MSG_TYPE } from "./BlobWorker";

// Rate limit resize events to prevent the canvas from messaging the worker too much
// This value is in milliseconds.
const RESIZE_RATE_LIMIT = 200;

const BlobCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);
    let worker = props.useWorker();

    useEffect(() => {
        const canvas = canvasRef.current;
        const offscreen = canvas.transferControlToOffscreen();
        let resizeToken = null;

        const initBlobMessage = {
            type: MSG_TYPE.INIT,
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

        // Rate-limited resize event listener
        let commitResizeToken = null;
        resizeToken = window.addEventListener("resize", () => {
            // Clear the previous timeout if it exists
            if (commitResizeToken) {
                clearTimeout(commitResizeToken);
            }

            // Set a new timeout to send the resize message
            commitResizeToken = setTimeout(() => {
                const resizeBlobMessage = {
                    type: MSG_TYPE.RESIZE,
                    window: {
                        devicePixelRatio: window.devicePixelRatio,
                        innerHeight: window.innerHeight,
                        innerWidth: window.innerWidth,
                    },
                };
                worker.postMessage(resizeBlobMessage);
            }, RESIZE_RATE_LIMIT);
        });

        return () => {
            // Clear any event and timeout tokens
            clearTimeout(commitResizeToken);
            window.removeEventListener("resize", resizeToken);
        }
    }, [worker]);

    return (
        <canvas id={props.canvasId} className={props.canvasClasses} ref={canvasRef} />
    );
}

export default BlobCanvas;