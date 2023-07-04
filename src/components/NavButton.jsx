import React from 'react';

export default function NavButton(props) {
    return (
        <button className="bg-accentlight dark:bg-accent nav-hover md:flex p-2 md:mx-2 md:my-2 items-center md:float-right">
            <span className="text-dark md:mr-3 font-semibold xs:hidden md:inline-block tracking-wide">{props.text}</span>
            <span className="text-dark md:mr-3 font-bold xs:inline-block md:hidden">{props.smallText}</span>
            <span className="nav-blob-wrapper relative xs:block md:flex items-center xs:w-full xs:min-h-1 xs:max-h-1 md:max-h-full md:w-1 xs:mt-2 md:mt-auto">
                <span className="bg-textdark rounded-full nav-blob inline-block"></span>
            </span>
        </button>
    )
}