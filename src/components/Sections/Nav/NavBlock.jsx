import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import ContactVisibilityContext from "../../../contexts/ContactVisibilityContext";
import NavContrastContext from "../../../contexts/NavContrastContext";

export const NavBlock = () => {

    const contactVisibilityVM = useContext(ContactVisibilityContext);
    const [contactVisibility, setContactVisibility] = useState(contactVisibilityVM.isVisible);

    // Subscribe to the contact visibility changes via VM and manage blob expansion/collapse 
    useEffect(() => {
        function contactVisibilityObserver(isVisible) {
            if (isVisible === contactVisibility)
                return;
            setContactVisibility(isVisible);
        }

        contactVisibilityVM.subscribe(contactVisibilityObserver);

        return () => {
            contactVisibilityVM.unsubscribe(contactVisibilityObserver);
        }
    }, [contactVisibilityVM, contactVisibility, setContactVisibility]);

    let overlayStyle = "md:dark:text-dark";
    if (contactVisibility) {
        overlayStyle = "md:dark:text-contactdark";
    }

    return <nav
        id="nav_section"
        className={`${overlayStyle} dark:text-primarylight fixed font-nav z-50 md:right-0 md:inline-block md:bottom-auto md:w-40 xl:w-48 md:h-full bottom-0 min-w-full md:min-w-0 text-dark transition-colors duration-700`}
    >
        <NavContrastContext.Provider value={contactVisibility}>
            <Navbar />
        </NavContrastContext.Provider>
    </nav>
}