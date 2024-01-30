import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display leading-none font-semibold md:dark:text-shadow-md dark:text-shadow-min">
      <div>
        <div className="text-textdark dark:text-secondary big-text-sec transition-all rounded-lg">
          Hi! I'm
        </div>
        <div className="w-fit text-textdarker dark:text-primary big-text-main transition-all backdrop-blur-sm py-2 md:py-4 rounded-lg md:rounded-none md:backdrop-blur-0">
          Tanish&nbsp;
          <br className="md:hidden" />
          Manku
        </div>
        <div className="flex md:text-xs big-text-sec md:mt-2 items-center">
          <div className="text-textdark dark:text-secondary big-text-sec transition-all ">and I&nbsp;</div>
          <div id="text_morph_container" className="big-text-sec text-textdarker dark:text-accenttrim dark:bg-accenttrim/10 dark:backdrop-blur-sm dark:px-1.5 dark:md:px-2 py-1.5 md:py-3 rounded-lg transition-all">
            <RotatingSelfSegment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigName;
