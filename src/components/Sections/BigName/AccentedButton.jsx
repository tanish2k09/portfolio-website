import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const common =
  "transition duration-500 ease-out transform hover:scale-110 " +
  "font-body font-semibold tracking-wide text-sm md:text-base " +
  "flex py-4 p-4 ";

export const primary =
  "bg-accent text-black group hover:bg-black dark:hover:bg-black hover:text-primary " +
  "m-0 " +
  "rounded border-accenttrim border-4";

export const secondary =
  "bg-accentsecondary text-black group hover:bg-black dark:hover:bg-black hover:text-primary " +
  "m-0 md:ml-6 mt-6 md:mt-auto " +
  "rounded-full border-accentsecondarytrim border-4";

export default function AccentedButton(props) {

  return (
    <AnchorLink href={props.link}>
      <button className={common + props.classes}>
        {props.text}
        {props.svg}
      </button>
    </AnchorLink>
  );
}
