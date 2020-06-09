import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavButton from './NavButton';

export default function ResponsiveNavItem(props) {
  if (props.download) {
    return (
      <a href={props.link} download={props.download}>
        <NavButton text={props.text} smallText={props.smallText} />
      </a>
    );
  }

  return (
    <AnchorLink href={props.link}>
      <NavButton text={props.text} smallText={props.smallText} />
    </AnchorLink>
  );
}
