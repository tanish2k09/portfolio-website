import { useRef, useCallback } from "react";
import NameBlock from "../components/Sections/BigName/NameBlock.jsx";

import ContactSection from "../components/Sections/Contact/ContactSection.jsx";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext.jsx";
import WorkBlock from "../components/Sections/Work/WorkBlock.jsx";
import { NavBlock } from "../components/Sections/Nav/NavBlock.jsx";
import { AboutBlock } from "../components/Sections/AboutBlock.jsx";
import ContactVisibilityViewModel from "../viewmodels/ContactVisibilityViewModel.js";
import LogoCanvas from "../components/Logos/LogoCanvas.jsx";
import { LogosGrid } from "../components/Logos/LogoOverlay.js";
import { OverlayContainer } from "../components/OverlayContainer.jsx";
import BlobCanvas from "../components/Blobs/BlobCanvas.jsx";
import { useWorker } from "../hooks/UseWorker.jsx";

function Home() {
    const workerRef = useWorker();
    const logosRef = useRef(null);

    // The VM should never change, so we use a ref
    // In order to avoid passing a useVM hook down to components, 
    // we can provide the ref via ContactVisibilityContext
    const contactVisibilityVMRef = useRef(new ContactVisibilityViewModel(false));

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
                    <div className="w-full h-lvh h-full z-[-2] absolute bg-hero-gradients dark:opacity-0 transition-all duration-700" />
                    <LogoCanvas canvasClasses="w-full h-lvh z-[-1] absolute" useLogos={useLogosCallback} />
                    <BlobCanvas canvasClasses="w-full h-lvh h-full z-0 absolute" useWorker={workerRef} />
                </OverlayContainer>

                <NavBlock />
                <NameBlock />
                <WorkBlock useWorker={workerRef} />
                <AboutBlock />

                <ContactSection />
            </ContactVisibilityContext.Provider>

        </div>
    );
}

export default Home;