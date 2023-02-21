import React from 'react';
import Tag from './Tag';
import SourceButton from './SourceButton';

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
 * 11) OPTIONAL (use for source code): repo
 * 12) OPTIONAL (use for play store links): isPlayStore + url
 */
export default function ProjectCard(props) {
  var buttonProps = "";
  if (props.url || props.repo) {
    buttonProps = "flex mt-2 pb-6 px-2";
  }

  var imageClassesDark = props.imageClassesDark;
  if (!imageClassesDark) {
    imageClassesDark = "hidden";
  }

  return (
    <div className={"work-card dark:shadow-work-card shadow-lg " + props.cardClasses}>
      <div className={props.bgColor + " w-full " + props.svgOptions}>
        <img src={props.asset} alt={props.assetAlt} className={props.imageClasses + " mx-auto"} />
        <img src={props.assetDark} alt={props.assetAlt} className={imageClassesDark + " mx-auto"} />
      </div>
      <div className={props.cardColor + " font-body relative inline-block w-full"}>
        <div className="mt-2 ml-2 mr-4 inline-block font-mono">
          {props.tags.map(tag => (
            <Tag key={tag.id.toString()} text={tag.text} colorClass={props.bgColor} />
          ))}
        </div>
        <br />
        <div className="inline-block">
          <div className={"mt-8 mx-4 text-lg w-full " + props.textColor}>
            <span className={"border-b-2 pb-1 font-medium " + (props.borderColor ? props.borderColor : "border-black")}>
              {props.name}
            </span>
          </div>
          <div className={"my-4 mx-4 inline-block text-sm font-normal " + props.textColor}>
            {props.description}
          </div>
        </div>
        <div className={buttonProps}>
          <SourceButton repo={props.repo} />
          <SourceButton isPlayStore={props.isPlayStore} url={props.url} />
        </div>
      </div>
    </div>
  )
}