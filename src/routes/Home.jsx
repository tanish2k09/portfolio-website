import { useState, useRef, useContext, useCallback } from "react";
import NameBlock from "../components/NameBlock.jsx";

import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";
import ContactSection from "../components/ContactSection.jsx";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext.jsx";
import WorkBlock from "../components/WorkBlock.jsx";
import { NavBlock } from "../components/NavBlock.jsx";
import { AboutBlock } from "../components/AboutBlock.jsx";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";
import { BlobContainer } from "../components/Blobs/BlobContainer.jsx";

function Home() {
    const blobRef = useRef(null);
    const [contactVisibility, setContactVisibility] = useState(false);
    const { isDark } = useContext(DarkModeContext);

    function useBlob() {
        if (blobRef.current == null) {
            blobRef.current = new Blob(HALF_PI, HALF_PI);
        }
        return blobRef.current;
    }
    const useBlobCallback = useCallback(useBlob, [blobRef]);

    function onContactShow() {
        if (blobRef.current != null)
            blobRef.current.cueExpansion();
        setContactVisibility(true);
    }
    const onContactShowCallback = useCallback(onContactShow, [blobRef]);

    function onContactHide() {
        if (blobRef.current != null)
            blobRef.current.cueCollapse();
        setContactVisibility(false);
    }
    const onContactHideCallback = useCallback(onContactHide, [blobRef]);

    return (
        <div id="app" className={`${isDark ? "dark" : ""} transition-colors`}>
            <BlobContainer useBlob={useBlobCallback} />

            <ContactVisibilityContext.Provider value={contactVisibility}>
                <NavBlock />
            </ContactVisibilityContext.Provider>

            <NameBlock />

            <WorkBlock />

            <AboutBlock />

            <ContactSection onContactShow={onContactShowCallback} onContactHide={onContactHideCallback} />
        </div>
    );
}

export default Home;