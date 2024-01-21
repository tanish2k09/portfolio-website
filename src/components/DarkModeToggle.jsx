import React, { useState, useEffect, useContext, useCallback } from "react";
import DarkModeContext from "../contexts/DarkModeContext";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const DarkModeToggle = () => {

  const darkModeVM = useContext(DarkModeContext);
  const [isDark, setDarkMode] = useState(darkModeVM.isDark);

  let commonClasses = "p-0 float-right"

  let image;
  if (isDark) {
    image = <SunIcon className={commonClasses} />;
  } else {
    image = <MoonIcon className={commonClasses} />;
  }

  const toggle = useCallback(() => {
    darkModeVM.toggle();
  }, [darkModeVM]);

  useEffect(() => {
    function darkModeObserver(isDarkMode) {
      if (isDark === isDarkMode)
        return;

      // Change application-state dark mode
      setDarkMode(isDarkMode);
    }

    darkModeVM.subscribe(darkModeObserver);

    return () => {
      darkModeVM.unsubscribe(darkModeObserver);
    }
  }, [darkModeVM, isDark, setDarkMode]);

  return (
    <div className="md:w-full md:h-12 md:flex md:float-right md:relative">
      <button id="dark_mode_toggle" onClick={toggle} title="Theme toggle">
        <div className="md:right-5 md:absolute relative mt-5 md:mt-0 px-2 md:px-0">
          {image}
        </div>
      </button>
    </div>
  );
}

export default DarkModeToggle;
