import { useState, useRef, useContext, useCallback, useEffect } from "react";
import NameBlock from "../components/NameBlock.jsx";

import ContactSection from "../components/ContactSection.jsx";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext.jsx";
import WorkBlock from "../components/WorkBlock.jsx";
import { NavBlock } from "../components/NavBlock.jsx";
import { AboutBlock } from "../components/AboutBlock.jsx";
import DarkModeContext from "../contexts/DarkModeContext.jsx";
import { BlobContainer } from "../components/Blobs/BlobContainer.jsx";
import ContactVisibilityViewModel from "../viewmodels/ContactVisibilityViewModel.js";

function Home() {
    const workerRef = useRef(null);


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

    return (
        <div id="app" className="dark:bg-dark bg-primarylight m-0 overscroll-x-none transition-colors duration-500">
            <ContactVisibilityContext.Provider value={contactVisibilityVMRef.current}>
                <BlobContainer useWorker={useWorkerCallback} />

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