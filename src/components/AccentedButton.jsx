import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AccentedButton(props) {

  const common =
    "accented-button " +
    "font-mono font-bold " +
    "bg-accentlight dark:bg-accent text-black " +
    "flex rounded shadow-xl " +
    "px-2 py-4 sm:p-4 m-0 ml-0 text-sm md:text-base";

  return (
    <AnchorLink href={props.link}>
      <button className={common}>
        {props.text}
        <svg
          className="min:ml-3 sm:mr-0 sm:ml-4 self-center stroke-0 w-5 stroke-current"
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
