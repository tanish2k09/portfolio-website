import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className={`xl:mt-4 pb-4 sticky h-full w-full flex md:inline-block justify-evenly overflow-x-hidden float-right bg-accentlight dark:bg-accent md:bg-transparent md:dark:bg-transparent shadow-nav-shadow md:shadow-none rounded-t-lg md:rounded-none`}>
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
        link={"/assets/resume.pdf"}
        download="tmanku_resume_04-Nov-2023.pdf"
      />
    </div>
  );
}

export default Navbar;
