import React from "react";
import TextLoop from "react-text-loop";

function RotatingSelfSegment() {
  return (
    <TextLoop interval={3000} springConfig={{ stiffness: 300, damping: 50 }}>
      <span>am a Software Developer 💻</span>
      <span>make some cool stuff 🦄</span>
      <span>really like minimalism 🖋️</span>
      <span>am a UI/UX Enthusiast 🤳</span>
      <span>care about accessibility 🤝</span>
      <span>love teal! Oh, and pancakes! 🥞</span>
    </TextLoop>
  );
}

export default RotatingSelfSegment;
