import React from "react";
import ResponsiveNavItem from "./ResponsiveNavItem.jsx";

function Navbar() {
  return (
    <div id="nav_child_wrapper" className="xl:mt-4 min:pb-4 sticky h-full w-full min:flex md:inline-block justify-evenly min:overflow-x-hidden min:float-right min:bg-accent md:bg-transparent">
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
        text="Résumé"
        smallText="Résumé"
        link={window.location.hostname + "/assets/tmanku_resume_230820.pdf"}
        download="tmanku_resume_230820.pdf"
      />
    </div>
  );
}

export default Navbar;
