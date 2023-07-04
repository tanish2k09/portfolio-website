import React from 'react';

export default function SourceButton(props) {

    if (!props.text && !props.url) {
        return (null);
    }

    return (
        <a href={props.url}>
            <button className="repo-button ml-2 mr-2 font-mono border-black border-2 px-4 py-2 text-sm rounded-sm tracking-wide h-full">
                {props.text}
            </button>
        </a>
    )
}