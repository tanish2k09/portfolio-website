import React from 'react';

export default function LightButton(props) {
    return (
        <a href={props.link}>
            <button className="relative font-mono min:text-sm md:text-base tracking-widest rounded-bigg p-8 m-8 min:min-w-full lg:min-w-25v light-button-bg flex justify-center">
                <img src={props.asset} alt={"Vector logo of " + props.title} className={props.imgClasses + " inline-block mr-6 min:h-7 md:h-8"} />
                <span className="flex h-full items-center my-auto">{props.title.toString().toUpperCase()}</span>
            </button>
        </a>
    )
};
