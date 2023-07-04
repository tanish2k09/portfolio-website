import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className="xl:mt-4 min:pb-4 sticky h-full w-full min:flex md:inline-block justify-evenly min:overflow-x-hidden min:float-right min:bg-accentlight min:dark:bg-accent md:bg-transparent md:dark:bg-transparent min:shadow-nav-shadow md:shadow-none">
      <DarkModeToggle />
      <ResponsiveNavItem
        text="My Work"
        smallText="Work"
        link="#work_showcase_text"
      />
      <ResponsiveNavItem
        text="About me"
        smallText="About"
        link="#about_me_text"
      />
      <ResponsiveNavItem
        text="Contact me"
        smallText="Contact"
        link="#contact_section"
      />
      <ResponsiveNavItem
        text="Resume"
        smallText="Resume"
        link={"/assets/tmanku_resume_3Jul2023.pdf"}
        download="tmanku_resume_03-July-2023.pdf"
      />
    </div>
  );
}

export default Navbar;
