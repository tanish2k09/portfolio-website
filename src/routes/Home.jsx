import { useState, useRef, useContext } from "react";
import BlobCanvas from "../components/Blobs/BlobCanvas.jsx";
import NameBlock from "../components/NameBlock.jsx";

import { Blob, HALF_PI } from "../components/Blobs/BlobOverlay.js";
import ContactSection from "../components/ContactSection.jsx";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext.jsx";
import WorkBlock from "../components/WorkBlock.jsx";
import { NavBlock } from "../components/NavBlock.jsx";
import { AboutBlock } from "../components/AboutBlock.jsx";
import { DarkModeContext } from "../contexts/DarkModeContext.jsx";

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

    function onContactShow() {
        if (blobRef.current != null)
            blobRef.current.cueExpansion();
        setContactVisibility(true);
    }

    function onContactHide() {
        if (blobRef.current != null)
            blobRef.current.cueCollapse();
        setContactVisibility(false);
    }

    return (
        <div id="app" className={`${isDark ? "dark" : ""} transition-colors`}>
            <div className="fixed left-0 z-0 h-full w-full flex">
                <BlobCanvas canvasId="blob_canvas" canvasClasses="w-full h-full absolute" useBlob={useBlob} />
            </div>

            <ContactVisibilityContext.Provider value={contactVisibility}>
                <NavBlock />
            </ContactVisibilityContext.Provider>

            <NameBlock />

            <WorkBlock />

            <AboutBlock />

            <ContactSection onContactShow={onContactShow} onContactHide={onContactHide} />
        </div>
    );
}

export default Home;