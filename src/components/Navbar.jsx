import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";
import WorkIcon from "../assets/work_code.svg";
import ContactMeIcon from "../assets/contact_me.svg";
import DocumentIcon from "../assets/document.svg";

function Navbar() {
  return (
    <div className="m-0 p-0 flex items-center">
      <ResponsiveNavItem
        text="Work"
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
        text="Contact me"
        resource={ContactMeIcon}
        alt="Contact me icon"
      />
    </div>
  );
}

export default Navbar;
