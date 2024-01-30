import React from 'react';


export default function SourceButton(props) {

    var ctaClasses = "hover:text-primary hover:bg-black";
    const buttonClasses = "transition-colors duration-700 ml-2 font-body px-4 py-2 text-sm rounded-full h-full";

    if (props.ctaClasses) {
        ctaClasses = props.ctaClasses;
    }

    return (
        <a href={props.url}>
            <button className={`${buttonClasses} ${ctaClasses}`}>
                {props.text}
            </button>
        </a>
    )
}

export const IconSourceButton = (props) => {

    const buttonClasses = "flex relative justify-center transition-all duration-700 ml-2 mr-2 font-body px-3 py-2 text-sm rounded-full h-full";

    const expandClasses = "button-text-expand md:group-hover:max-w-sourcebutton md:opacity-20 md:group-hover:opacity-100 md:group-hover:ml-2"

    var textClasses = "flex items-center my-auto"

    var conditionalClasses;
    if (props.persistent) {
        conditionalClasses = "ml-2";
    } else {
        conditionalClasses = "ml-0";
    }

    if (!props.persistent) {
        textClasses += " " + expandClasses;
    }

    textClasses += " " + conditionalClasses;

    console.log(props.icon.src);

    return (
        <a href={props.url} target="_blank" rel='noreferrer' className='group'>
            <button className={`${buttonClasses} ${props.ctaClasses}`} onClick={props.onClick}>
                <props.icon.src className={"w-4 h-4 my-auto inline-block transition-colors duration-700 " + props.iconClasses} alt={props.icon.alt} />
                <span className={textClasses}>{props.text} {props.persistent}</span>
            </button>
        </a>
    )
}