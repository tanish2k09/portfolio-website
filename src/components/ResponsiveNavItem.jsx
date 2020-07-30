import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ResponsiveNavItem(props) {
  return (
    <AnchorLink href={props.link}>
      <button className="bg-accent nav-hover flex p-2 m-2 items-center float-right">
        <img
          src={props.resource}
          alt={props.alt}
          className="inline-block xl:w-4 h-full xl:mr-4"
        />
        <span className="text-dark xl:mr-3">{props.text}</span>
        <span className="nav-blob-wrapper relative flex items-center">
          <span className="bg-textdark rounded-full nav-blob inline-block"></span>
        </span>
      </button>
    </AnchorLink>
  );
}
