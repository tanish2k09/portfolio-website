import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className="xl:mt-4 sticky h-full w-full">
      <ResponsiveNavItem
        text="My Work"
        link="#work_showcase_text"
      />
      <ResponsiveNavItem
        text="About me"
        link="#about_me_text"
      />
      <ResponsiveNavItem
        text="Contact Me"
      />
      <ResponsiveNavItem
        text="Resume"
      />
    </div>
  );
}

export default Navbar;
