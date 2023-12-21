import { useContext } from "react";
import Navbar from "./Navbar";
import ContactVisibilityContext from "../contexts/ContactVisibilityContext";

export const NavBlock = () => {

    const contactVisibility = useContext(ContactVisibilityContext);

    let overlayStyle = "";
    if (contactVisibility) {
        overlayStyle = "md:dark:text-contactdark";
    }

    console.log("Navbar change: " + contactVisibility)

    return <nav
        id="nav_section"
        className={`${overlayStyle} fixed font-nav z-50 md:right-0 md:inline-block md:bottom-auto md:w-40 xl:w-48 md:h-full bottom-0 min-w-full md:min-w-0 text-dark transition-colors duration-700`}
    >
        <Navbar />
    </nav>
}