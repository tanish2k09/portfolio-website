import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display my-8 min:mx-3 sm:mx-0 leading-none font-semibold text-shadow">
      <div>
        <div className="text-secondary big-text-sec">Hi! I'm</div>
        <div className="text-primary big-text-main">
          Tanish
          <br />
          Manku
        </div>
        <div className="flex md:text-xs big-text-sec min:ml-2 sm:ml-1 xl:ml-4 sm:mt-2">
          <div className="text-secondary ">and this is&nbsp;</div>
          <div id="text_morph_container" className="text-accent">
            <RotatingSelfSegment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigName;
