import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function AccentedButton(props) {
  let style = "";

  const common =
    "transition duration-500 linear transform hover:scale-110 font-mono relative";

  if (props.type === "primary") {
    style = "bg-accent hover:bg-opacity-90 text-black py-4 px-4 rounded flex";
  } else if (props.type === "nav") {
    style =
      "border-2 border-accent text-accent hover:bg-accent hover:bg-opacity-25 py-2 px-4 rounded-md hover:rounded-none";
  }

  if (props.type === "primary") {
    return (
      <AnchorLink href={props.link}>
        <button className={common + " " + style}>
          {props.text}
          <svg
            className="ml-4 self-center stroke-0 w-5 stroke-current"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
            />
          </svg>
        </button>
      </AnchorLink>
    );
  }

  return <button className={common + " " + style}>{props.text}</button>;
}

export default AccentedButton;
