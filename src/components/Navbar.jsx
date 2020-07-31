import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";
import WorkIcon from "../assets/work_code.svg";
import ContactMeIcon from "../assets/contact_me.svg";
import DocumentIcon from "../assets/document.svg";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className="xl:mt-4 sticky h-full w-full">
      <ResponsiveNavItem
        text="My Work"
        resource={WorkIcon}
        alt="Work icon"
        link="#work_showcase_text"
      />
      <ResponsiveNavItem
        text="Resume"
        resource={DocumentIcon}
        alt="Document icon"
      />
      <ResponsiveNavItem
        text="Contact Me"
        resource={ContactMeIcon}
        alt="Contact me icon"
      />
    </div>
  );
}

export default Navbar;
