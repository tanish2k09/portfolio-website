import React from 'react';

export default function NavButton(props) {
    return (
        <button className="bg-accentlight dark:bg-accent nav-hover md:flex p-2 md:mx-2 md:my-2 items-center md:float-right">
            <span className="text-dark md:mr-3 font-semibold min:hidden md:inline-block tracking-wide">{props.text}</span>
            <span className="text-dark md:mr-3 font-bold min:inline-block md:hidden">{props.smallText}</span>
            <span className="nav-blob-wrapper relative min:block md:flex items-center min:w-full min:min-h-1 min:max-h-1 md:max-h-full md:w-1 min:mt-2 md:mt-auto">
                <span className="bg-textdark rounded-full nav-blob inline-block"></span>
            </span>
        </button>
    )
}