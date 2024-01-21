import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display my-8 mx-3 sm:mx-0 leading-none font-semibold md:dark:text-shadow-md dark:text-shadow-min">
      <div>
        <div className="text-textdark dark:text-secondary big-text-sec transition-all bg-secondary/10 backdrop-blur-sm w-fit px-2 py-1 md:py-2 rounded-lg">Hi! I'm</div>
        <div className="text-textdarker dark:text-primary big-text-main transition-all">
          Tanish
          <br />
          Manku
        </div>
        <div className="flex md:text-xs big-text-sec ml-2 sm:ml-1 xl:ml-4 sm:mt-2 items-center">
          <div className="text-textdark dark:text-secondary transition-all ">and I&nbsp;</div>
          <div id="text_morph_container" className="text-accenttrim bg-accenttrim/10 backdrop-blur-sm px-2 py-2 md:py-4 rounded-lg transition-all">
            <RotatingSelfSegment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigName;
