import { useRef, useEffect, useContext } from "react";
import ContactVisibilityContext from "../../contexts/ContactVisibilityContext";
import DarkModeContext from "../../contexts/DarkModeContext";
import { BlobRenderer } from "./BlobOverlay";

// Rate limit resize events to prevent the canvas from messaging the worker too much
// This value is in milliseconds.
const RESIZE_RATE_LIMIT = 200;

const BlobCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);

    // This has little use besides ensuring the canvas only requests context once
    // and that the context is always the same
    // This helps with hot-reloading and prevents the canvas from rerendering
    // However, in case on changes related to context rendering, a refresh is required.
    const contextRef = useRef(null);
    const contactVisibilityVM = useContext(ContactVisibilityContext);
    const darkModeVM = useContext(DarkModeContext);
    let worker = props.useWorker;

    // Canvas-related events
    useEffect(() => {
        const canvas = canvasRef.current;
        let renderer = null;

        // If we're using the Blob() instance, we'll have to render it here
        const context = contextRef.current || canvas.getContext("2d");
        contextRef.current = context;

        // Blob init
        worker.instance.setContext(context);
        worker.instance.setWindow(window);

        // Renderer init
        renderer = new BlobRenderer(worker.instance);

        // Render loop
        renderer.startLoop();


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
                worker.instance.setWindow(window);
                resizeToken = null;
            }, RESIZE_RATE_LIMIT);
        });

        return () => {
            // Stop rendering if we're using the Blob() instance
            if (renderer) {
                renderer.stopLoop();
            }

            // Clear any event and timeout tokens
            clearTimeout(commitResizeToken);
            window.removeEventListener("resize", resizeToken);
        }
    }, [worker]);

    // Expansion events
    useEffect(() => {
        if (props.disableExpansion === true) {
            return;
        }

        function contactVisibilityObserver(isVisible) {
            worker.instance.setExpansion(isVisible === true);
        }

        contactVisibilityVM.subscribe(contactVisibilityObserver);

        return () => {
            contactVisibilityVM.unsubscribe(contactVisibilityObserver);
        }
    }, [contactVisibilityVM, worker, props.disableExpansion]);

    // Subscribe to the dark mode changes via VM and manage dark mode
    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            worker.instance.setDarkMode(isDarkMode === true);
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