import { useRef, useEffect, useContext } from "react";
import ContactVisibilityContext from "../../contexts/ContactVisibilityContext";
import DarkModeContext from "../../contexts/DarkModeContext";

import { MSG_TYPE } from "./BlobWorker";

// Rate limit resize events to prevent the canvas from messaging the worker too much
// This value is in milliseconds.
const RESIZE_RATE_LIMIT = 200;

const BlobCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);
    const contactVisibilityVM = useContext(ContactVisibilityContext);
    const darkModeVM = useContext(DarkModeContext);
    let worker = props.useWorker();

    // Canvas-related events
    useEffect(() => {
        const canvas = canvasRef.current;
        const offscreen = canvas.transferControlToOffscreen();

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
        let resizeToken = null;
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
                resizeToken = null;
            }, RESIZE_RATE_LIMIT);
        });

        return () => {
            // Clear any event and timeout tokens
            clearTimeout(commitResizeToken);
            window.removeEventListener("resize", resizeToken);
        }
    }, [worker]);

    // Expansion events
    useEffect(() => {
        if (props.disableExpansion === true) {
            console.log("returning expansion")
            return;
        }

        function contactVisibilityObserver(isVisible) {
            worker.postMessage({ type: MSG_TYPE.SET_EXPANSION, value: isVisible === true });
        }

        contactVisibilityVM.subscribe(contactVisibilityObserver);

        return () => {
            contactVisibilityVM.unsubscribe(contactVisibilityObserver);
        }
    }, [contactVisibilityVM, worker, props.disableExpansion]);

    // Subscribe to the dark mode changes via VM and manage dark mode
    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            worker.postMessage({ type: MSG_TYPE.SET_DARK_MODE, value: isDarkMode === true });
        }

        darkModeVM.subscribe(darkModeObserver);

        return () => {
            darkModeVM.unsubscribe(darkModeObserver);
        }
    }, [darkModeVM, worker]);

    return (
        <canvas id={props.canvasId} className={props.canvasClasses} ref={canvasRef} />
    );
}

export default BlobCanvas;