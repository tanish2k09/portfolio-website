import { useRef, useEffect, useContext } from "react";
import DarkModeContext from "../../contexts/DarkModeContext";

// Rate limit resize events to prevent the canvas from messaging the worker too much
// This value is in milliseconds.
const RESIZE_RATE_LIMIT = 200;
const VELOCITY_FPS = 120;

const LogoCanvas = (props) => {

    // Use a ref so the canvas doesn't keep rerendering
    const canvasRef = useRef(null);
    const darkModeVM = useContext(DarkModeContext);
    let logos = props.useLogos();

    // Canvas-related events
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Init logic
        logos.setContext(context);
        logos.setWindow(window);
        logos.updateValues();

        // Rendering logic
        let renderFrameToken = null;
        let lastFrameTime = 0;
        const render = () => {
            logos.clearPaths();
            logos.drawPaths();

            // FPS-limited velocity update
            if (performance.now() - lastFrameTime > 1000 / VELOCITY_FPS) {
                logos.updateVelocities();
                logos.moveCanvas();
                lastFrameTime = performance.now();
            }

            renderFrameToken = requestAnimationFrame(render);
        }
        renderFrameToken = requestAnimationFrame(render);

        // Event-responsiveness logic
        const onMouseMove = (e) => {
            logos.setMouseCoordinates(e.clientX, e.clientY);
        }
        document.addEventListener("mousemove", onMouseMove);

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
                logos.updateValues();
                resizeToken = null;
            }, RESIZE_RATE_LIMIT);
        });

        return () => {
            // Clear any event and timeout tokens
            if (renderFrameToken !== null)
                cancelAnimationFrame(renderFrameToken);
            clearTimeout(commitResizeToken);
            window.removeEventListener("resize", resizeToken);
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, [logos]);

    // Dark mode logic
    // Subscribe to the dark mode changes via VM and manage dark mode
    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            logos.setDarkMode(isDarkMode === true);
        }

        darkModeVM.subscribe(darkModeObserver);

        return () => {
            darkModeVM.unsubscribe(darkModeObserver);
        }
    }, [darkModeVM, logos]);

    return (
        <canvas id={props.canvasId} className={props.canvasClasses} ref={canvasRef} />
    );
}

export default LogoCanvas;