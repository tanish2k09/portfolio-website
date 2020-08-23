import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ResponsiveNavItem(props) {
  return (
    <div className="sm:block">
      <AnchorLink href={props.link}>
        <button className="bg-accent nav-hover sm:flex p-2 sm:mx-2 sm:my-2 items-center sm:float-right">
          <span className="text-dark xl:mr-3 font-bold min:hidden sm:inline-block">{props.text}</span>
          <span className="text-dark xl:mr-3 font-bold min:inline-block sm:hidden">{props.smallText}</span>
          <span className="nav-blob-wrapper relative min:block sm:flex items-center min:w-full min:min-h-1 min:max-h-1 sm:max-h-full sm:w-1 min:mt-2 sm:mt-auto">
            <span className="bg-textdark rounded-full nav-blob inline-block"></span>
          </span>
        </button>
      </AnchorLink>
    </div>
  );
}
