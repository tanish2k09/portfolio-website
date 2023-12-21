import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display my-8 mx-3 sm:mx-0 leading-none font-semibold md:dark:text-shadow-md dark:text-shadow-min">
      <div>
        <div className="text-textdark dark:text-secondary big-text-sec transition-all">Hi! I'm</div>
        <div className="text-textdarker dark:text-primary big-text-main transition-all">
          Tanish
          <br />
          Manku
        </div>
        <div className="flex md:text-xs big-text-sec ml-2 sm:ml-1 xl:ml-4 sm:mt-2">
          <div className="text-textdark dark:text-secondary transition-all ">and I&nbsp;</div>
          <div id="text_morph_container" className="text-accenttrim transition-all">
            <RotatingSelfSegment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigName;
