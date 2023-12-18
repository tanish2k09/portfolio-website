import React from 'react';

export default function NavButton(props) {
    return (
        <button className="bg-transparent group md:flex p-2 md:mx-2 mt-2 md:my-2 items-center md:float-right">
            <span className="md:mr-3 font-semibold hidden md:inline-block tracking-wide">{props.text}</span>
            <span className="md:mr-3 font-semibold inline-block md:hidden">{props.smallText}</span>
            <span className="hidden md:flex nav-blob-wrapper relative items-center w-full min-h-1 max-h-1 md:max-h-full md:w-1 mt-2 md:mt-auto">
                <span className="nav-dot bg-textdark rounded-full nav-blob md:group-hover:h-full inline-block"></span>
            </span>
        </button>
    )
}