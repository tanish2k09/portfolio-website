import React from 'react';

export default function SourceButton(props) {

    var ctaClasses = "border-black hover:text-primary hover:bg-black";

    if (props.ctaClasses) {
        ctaClasses = props.ctaClasses;
    }

    return (
        <a href={props.url}>
            <button className={`transition-colors duration-500 ml-2 mr-2 font-mono border-2 px-4 py-2 text-sm rounded-sm tracking-wide h-full ${ctaClasses}`}>
                {props.text}
            </button>
        </a>
    )
}