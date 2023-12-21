import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const DarkModeToggle = () => {

  const { isDark, toggleTheme } = useContext(DarkModeContext);

  console.log("DarkModeToggle: isDark = " + isDark);

  let commonClasses = "p-0 float-right"

  let image;
  if (isDark) {
    image = <SunIcon className={commonClasses} />;
  } else {
    image = <MoonIcon className={commonClasses} />;
  }

  return (
    <div className="md:w-full md:h-12 md:flex md:float-right md:relative">
      <button id="dark_mode_toggle" onClick={toggleTheme} title="Theme toggle">
        <div className="md:right-5 md:absolute relative mt-5 md:mt-0 px-2 md:px-0">
          {image}
        </div>
      </button>
    </div>
  );
}

export default DarkModeToggle;
