import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display m-8 leading-none xl:font-semibold text-shadow">
      <div>
        <div className="text-secondary big-text-sec">Hi! I'm</div>
        <div className="text-primary big-text-main">
          Tanish
          <br />
          Manku
        </div>
        <div className="flex md:text-xs big-text-sec xl:ml-4 xl:mt-2">
          <div className="text-secondary ">and I&nbsp;</div>
          <div id="text_morph_container" className="text-accent">
            <RotatingSelfSegment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigName;
