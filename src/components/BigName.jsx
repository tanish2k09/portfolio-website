import React from "react";
import RotatingSelfSegment from "./RotatingSelfSegment";

function BigName() {
  return (
    <div className="font-display m-8 leading-none xl:font-semibold">
      <div>
        <div className="text-secondary xl:text-4xl">Hi! I'm</div>
        <div className="text-primary xl:text-12xl">
          Tanish
          <br />
          Manku
        </div>
        <div className="flex md:text-xs xl:text-4xl xl:ml-4 xl:mt-2">
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
