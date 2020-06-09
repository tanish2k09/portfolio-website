import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ResponsiveNavItem(props) {
  return (
    <AnchorLink href={props.link}>
      <button className="xl:mt-8 xl:ml-8 xl:pt-2 hover:bg-opacity-25 bg-accent nav-hover">
        <span className="text-dark xl:ml-4 xl:mr-3 text-009">{props.text}</span>
        <img
          src={props.resource}
          alt={props.alt}
          className="inline-block xl:w-4 h-full xl:mr-4 xl:mb-1"
        />
        <br />
        <div
          id="underline-nav"
          className="bg-black inline-block rounded-full"
        ></div>
      </button>
    </AnchorLink>
  );
}
