import React from "react";
import TextLoop from "react-text-loop";

function RotatingSelfSegment() {
  return (
    <TextLoop interval={1800} springConfig={{ stiffness: 300, damping: 50 }}>
      <span>am a Software Developer</span>
      <span>care about accessibility</span>
      <span>make some cool stuff</span>
      <span>constantly expand my limits</span>
      <span>really like minimalism</span>
      <span>am a UI/UX Enthusiast</span>
      <span>enjoy open source</span>
      <span>love pancakes! Oh, and teal!</span>
    </TextLoop>
  );
}

export default RotatingSelfSegment;
