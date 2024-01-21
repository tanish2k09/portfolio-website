import React from 'react';
import Tag from './Tag';
import SourceButton, { IconSourceButton } from './SourceButton';
import { ReactComponent as GITHUB_SVG } from '../assets/github.svg';
import { ReactComponent as PLAY_STORE_SVG } from '../assets/play-logo.svg';
import { ReactComponent as SHIELD_SVG } from '../assets/Shield.svg';
import { ReactComponent as QUOTES_SVG } from '../assets/double_quotes.svg';

// !! These strings should be less than 20 characters long !!
// !! If you want longer strings, you'll have to change the sourcebutton max-width in tailwind.config.js !!
export const CTA_TEXT = {
  GITHUB: 'Source Code',
  PSTORE: 'View in Play Store',
  BLOG: 'View Articles',
  PPOL: 'Privacy Policy',
  SITE: 'Visit Site',
};

export const CTA_LOGO = {
  GITHUB: { src: GITHUB_SVG, alt: "GitHub Logo" },
  PSTORE: { src: PLAY_STORE_SVG, alt: "Play Store Logo" },
  BLOG: { src: QUOTES_SVG, alt: "Closed quote mark for blog" },
  PPOL: { src: SHIELD_SVG, alt: "Shield Logo for Privacy Policy action" },
};

export const githubPath = "https://github.com/tanish2k09/"
export function github(repo) {
  return githubPath + repo;
}


/*
 * Props used:
 * 1) cardClasses
 * 2) bgColor
 * 3) OPTIONAL (use for svgs): svgOptions
 * 4) asset
 * 5) assetAlt
 * 6) imageClasses
 * 7) cardColor
 * 8) tags
 * 9) name
 * 10) description
 * 11) ctas
 */
export default function ProjectCard(props) {
  var buttonProps = "";
  if (props.ctas) {
    buttonProps = "flex mt-2 pb-4 px-2";
  }

  var imageOverlapProps = "";
  if (props.imageOverlapClasses) {
    imageOverlapProps = props.imageOverlapClasses;
  }

  var imageClassesDark = props.imageClassesDark;
  if (!imageClassesDark) {
    imageClassesDark = "hidden";
  }

  var svgOptions = "";
  if (props.svgOptions) {
    svgOptions = props.svgOptions;
  }

  var button_key = 1;
  var cta_buttons = (
    props.ctas.map(cta => {
      if (cta.icon) {
        return <IconSourceButton
          key={button_key++}
          url={cta.url}
          text={cta.title}
          ctaClasses={props.ctaClasses}
          useWorker={props.useWorker}
          icon={cta.icon}
          persistent={cta.persistent}
          iconClasses={cta.iconClasses}
        />
      } else {
        return <SourceButton key={button_key++} url={cta.url} text={cta.title} ctaClasses={props.ctaClasses} useWorker={props.useWorker} />
      }
    })
  );

  var tag_key = 1;

  var imageComponent = (
    <div className={"w-full" + svgOptions}>
      <img src={props.asset} alt={props.assetAlt} className={props.imageClasses + " mx-auto"} />
      <div className={imageOverlapProps}>
        <img src={props.assetDark} alt={props.assetAlt} className={imageClassesDark + " mx-auto"} />
      </div>
    </div>
  );
  if (props.svg) {
    imageComponent = (
      <div className={props.svgOptions}>
        {props.svg}
      </div>
    )
  }

  return (
    <div className={props.bgColor + " work-card dark:shadow-work-card shadow-lg transition-all duration-700 rounded-xl md:rounded-2xl " + props.cardClasses}>
      {imageComponent}
      <div className={"font-body relative inline-block m-4 mb-0 md:m-6 md:mb-0 duration-700 max-w-2"}>
        <div className="mt-2 inline-flex justify-start flex-wrap font-mono gap-x-2">
          {props.tags.map(tag => (
            <Tag key={tag_key++} text={tag.text} colorClass={props.tagColor ? props.tagColor : props.bgColor} />
          ))}
        </div>
        <div className={props.cardColor + " mt-2 pb-2 rounded-t-xl md:rounded-t-2xl transition-colors duration-700"}>
          <div className="inline-block">
            <div className={"mt-8 mx-4 text-lg w-full"}>
              <span className={`border-b-[3px] pb-1 font-medium transition-colors duration-700 ${props.textColor} ${(props.borderColor ? props.borderColor : "border-black")}`}>
                {props.name}
              </span>
            </div>
            <div className={"mb-4 mt-6 mx-4 inline-block text-sm md:text-md xl:text-lg font-normal transition-colors duration-700 " + props.textColor}>
              {props.description}
            </div>
          </div>
          <div className={buttonProps}>
            {cta_buttons}
          </div>
        </div>
      </div>
    </div>
  )
}