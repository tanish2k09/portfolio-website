import React from 'react';

export default function LightButton(props) {
    return (
        <a href={props.link}>
            <button className="font-mono text-base tracking-widest rounded-bigg p-8 m-8 min:min-w-full lg:min-w-25v light-button-bg flex justify-center">
                <img src={props.asset} alt={"Vector logo of " + props.title} className={props.imgClasses + " inline-block mr-4"} />
                {props.title.toString().toUpperCase()}
            </button>
        </a>
    )
};
