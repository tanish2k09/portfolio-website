import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className={
      `transition-all duration-700
      xl:mt-4 pb-2 sticky h-full w-full flex md:inline-block justify-evenly overflow-x-hidden float-right
    bg-white/50 dark:bg-black/30 dark:backdrop-contrast-[.80] 
    dark:md:backdrop-contrast-100 backdrop-blur-xl 
    md:backdrop-blur-none md:bg-transparent md:dark:bg-transparent
    border-t-[1px] dark:border-gray-100/10 
    border-black/10 md:border-none rounded-t-lg md:rounded-none`
    }>
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
