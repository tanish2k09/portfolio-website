import { useRef, useCallback } from "react";
import NameBlock from "../components/NameBlock.jsx";

import ContactSection from "../components/ContactSection.jsx";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext.jsx";
import WorkBlock from "../components/WorkBlock.jsx";
import { NavBlock } from "../components/NavBlock.jsx";
import { AboutBlock } from "../components/AboutBlock.jsx";
import ContactVisibilityViewModel from "../viewmodels/ContactVisibilityViewModel.js";
import LogoCanvas from "../components/Logos/LogoCanvas.jsx";
import { LogosGrid } from "../components/Logos/LogoOverlay.js";
import { OverlayContainer } from "../components/OverlayContainer.jsx";
import BlobCanvas from "../components/Blobs/BlobCanvas.jsx";

function Home() {
    const workerRef = useRef(null);
    const logosRef = useRef(null);

    // The VM should never change, so we use a ref
    // In order to avoid passing a useVM hook down to components, 
    // we can provide the ref via ContactVisibilityContext
    const contactVisibilityVMRef = useRef(new ContactVisibilityViewModel(false));

    function useWorker() {
        if (workerRef.current === null)
            // Once created, this worker will be reused for the lifetime of the app
            // This worker is also never terminated. The browser is hopefully smart enough to handle it.
            workerRef.current = new Worker(new URL("./../components/Blobs/BlobWorker.js", import.meta.url));
        return workerRef.current;
    }
    const useWorkerCallback = useCallback(useWorker, [workerRef]);

    function useLogos() {
        if (logosRef.current === null)
            logosRef.current = new LogosGrid();
        return logosRef.current;
    }
    const useLogosCallback = useCallback(useLogos, [logosRef]);

    return (
        <div id="app" className="dark:bg-dark bg-primarylight m-0 overscroll-x-none transition-colors duration-500">
            <ContactVisibilityContext.Provider value={contactVisibilityVMRef.current}>
                <OverlayContainer>
                    <LogoCanvas canvasClasses="w-full h-full z-[-1] absolute" useLogos={useLogosCallback} />
                    <BlobCanvas canvasClasses="w-full h-full z-0 absolute" useWorker={useWorkerCallback} />
                </OverlayContainer>

                <NavBlock />
                <NameBlock />
                <WorkBlock />
                <AboutBlock />

                <ContactSection />
            </ContactVisibilityContext.Provider>

        </div>
    );
}

export default Home;