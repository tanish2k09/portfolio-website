import React from "react";
import TextLoop from "react-text-loop";

function RotatingSelfSegment() {
  return (
    <TextLoop interval={1800} springConfig={{ stiffness: 300, damping: 50 }}>
      <span>April fool's edition</span>
      <span>April fool's edition</span>
      <span>April fool's edition</span>
      <span>pretty funny XD</span>
    </TextLoop>
  );
}

export default RotatingSelfSegment;
