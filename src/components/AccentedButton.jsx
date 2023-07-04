import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function AccentedButton(props) {

  const common =
    "accented-button " +
    "font-nav font-semibold md:font-medium tracking-wide " +
    "bg-accentlight dark:bg-accent text-black " +
    "flex rounded shadow-xl " +
    "px-2 py-4 sm:p-4 m-0 ml-0 text-sm md:text-base";

  return (
    <AnchorLink href={props.link}>
      <button className={common}>
        {props.text}
        <svg className="ml-3 sm:mr-0 sm:ml-4 self-center w-5 stroke-current" 
          width="12" height="14" viewBox="0 0 944 1344" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="472" cy="160" r="160" fill="black"/>
          <path d="M426.745 1229.25C451.739 1254.25 492.261 1254.25 517.255 1229.25L924.548 821.961C949.542 796.968 949.542 756.445 924.548 731.452C899.555 706.458 859.032 706.458 834.039 731.452L472 1093.49L109.961 731.452C84.9678 706.458 44.4452 706.458 19.4517 731.452C-5.54189 756.445 -5.54189 796.968 19.4517 821.961L426.745 1229.25ZM408 160L408 1184H536V160H408Z" fill="black"/>
        </svg>
      </button>
    </AnchorLink>
  );
}
