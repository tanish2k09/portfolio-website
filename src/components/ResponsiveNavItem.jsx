import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function ResponsiveNavItem(props) {
  let resource;

  if (props.text === "Work") {
    resource = (
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <title>/svg/ic-terminal</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="ic-terminal" fill-rule="nonzero" fill="currentColor">
            <path
              d="M3,5.99406028 L3,18.0059397 C3,19.1054862 3.8932319,20 4.99508929,20 L19.0049107,20 C20.1073772,20 21,19.1072288 21,18.0059397 L21,5.99406028 C21,4.89451376 20.1067681,4 19.0049107,4 L4.99508929,4 C3.8926228,4 3,4.8927712 3,5.99406028 Z M1,5.99406028 C1,3.78785482 2.7884002,2 4.99508929,2 L19.0049107,2 C21.210775,2 23,3.78938161 23,5.99406028 L23,18.0059397 C23,20.2121452 21.2115998,22 19.0049107,22 L4.99508929,22 C2.78922499,22 1,20.2106184 1,18.0059397 L1,5.99406028 Z M5.26674525,11.6980752 C4.91108492,11.3097909 4.91108492,10.6902091 5.26674525,10.3019248 C5.63548778,9.89935839 6.24389719,9.89935839 6.61263972,10.3019248 L10,14 L6.61263972,17.6980752 C6.24389719,18.1006416 5.63548778,18.1006416 5.26674525,17.6980752 C4.91108492,17.3097909 4.91108492,16.6902091 5.26674525,16.3019248 L7.37526073,14 L5.26674525,11.6980752 Z M11,17 C11,16.4477153 11.4530363,16 11.9970301,16 L18.0029699,16 C18.5536144,16 19,16.4438648 19,17 C19,17.5522847 18.5469637,18 18.0029699,18 L11.9970301,18 C11.4463856,18 11,17.5561352 11,17 Z M3,6 L22,6 L22,8 L3,8 L3,6 Z"
              id="Rectangle-14"
            ></path>
          </g>
        </g>
      </svg>
    );
  } else if (props.text === "Resume") {
  }

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
