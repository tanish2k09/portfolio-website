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
    const [isDark, setDarkMode] = useState(true);
    const darkModeVM = useContext(DarkModeContext);

    // The VM should never change, so we use a ref
    // In order to avoid passing a useVM hook down to components, 
    // we can provide the ref via ContactVisibilityContext
    const contactVisibilityVMRef = useRef(new ContactVisibilityViewModel(false));
    const contactVisibilityVM = contactVisibilityVMRef.current;

    function useWorker() {
        if (workerRef.current === null)
            // Once created, this worker will be reused for the lifetime of the app
            // This worker is also never terminated. The browser is hopefully smart enough to handle it.
            workerRef.current = new Worker(new URL("./../components/Blobs/BlobWorker.js", import.meta.url));
        return workerRef.current;
    }

    // Subscribe to the contact visibility changes via VM and manage blob expansion/collapse 
    useEffect(() => {
        function contactVisibilityObserver(isVisible) {
            if (isVisible) {
                blobRef.current.cueExpansion();
            } else {
                blobRef.current.cueCollapse();
            }
        }

        contactVisibilityVM.subscribe(contactVisibilityObserver);

        return () => {
            contactVisibilityVM.unsubscribe(contactVisibilityObserver);
        }
    }, [contactVisibilityVM]);

    // Subscribe to the dark mode changes via VM and manage dark mode
    useEffect(() => {
        function darkModeObserver(isDarkMode) {
            // Prevent duplicate state changes
            if (isDark === isDarkMode)
                return;

            // Update the state - will cause Home to re-render
            setDarkMode(isDarkMode);

            // Update the blob's dark mode
            if (blobRef.current !== undefined) {
                blobRef.current.setDarkMode(isDarkMode);
            }
        }

        darkModeVM.subscribe(darkModeObserver);

        return () => {
            darkModeVM.unsubscribe(darkModeObserver);
        }
    }, [blobRef, darkModeVM, isDark, setDarkMode]);

    return (
        <div id="app" className={`${isDark ? "dark" : ""} transition-colors`}>
            <ContactVisibilityContext.Provider value={contactVisibilityVMRef.current}>
                <BlobContainer useBlob={useBlobCallback} />

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