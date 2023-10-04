import React from "react";
import TextLoop from "react-text-loop";

function RotatingSelfSegment() {
  return (
    <TextLoop interval={1800} springConfig={{ stiffness: 300, damping: 50 }}>
      <span>am a Software Developer 💻</span>
      <span>love Halloween! 🎃 👻</span>
      <span>make some cool stuff 🦄</span>
      <span>am very scary. Boo! 👻</span>
      <span>really like minimalism.</span>
      <span>like pumpkin spice coffee ☕️</span>
      <span>am a UI/UX Enthusiast 🤳</span>
      <span>care about accessibility 🤝</span>
      <span>love teal! Oh, and pancakes! 🥞</span>
    </TextLoop>
  );
}

export default RotatingSelfSegment;
