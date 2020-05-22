import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import KlapseIcon from "../assets/klapse_icon.png";

require("../scripts/autoscroll.js");

export default function ScrollingCardsContent() {
  return (
    <div className="flex h-full overflow-x-scroll overflow-y-hidden scrolling-wrapper my-auto">
      <ProjectCard
        id="klapse_card"
        begin="#fcb69f"
        end="#ff9a9e"
        text="K&bull;Lapse"
        resource={KlapseIcon}
        desc="K-lapse project icon"
      />
      <ProjectCard
        id="sce_card"
        begin="#63ebf5"
        end="#42e8bc"
        text="Smurf Config Editor"
        desc="Smurf Config Editor project icon"
      />
      <ProjectCard
        id="musicbender_card"
        begin="#a8c0ff"
        end="#bc94ff"
        text="Musicbender"
        resource={KlapseIcon}
        desc="K-lapse project icon"
      />
      <ProjectCard id="textbender_card" begin="#F1A7F1" end="#FAD0C4" />
      <ProjectCard id="trace2sleep_card" begin="#f2709c" end="#ff9472" />
      <span className="w-4 h-full inline-block bg-transparent">&nbsp;</span>
    </div>
  );
}
