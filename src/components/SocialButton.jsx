import React from 'react';

export default function SocialButton(props) {

    return (
        <a href={props.link}>
            <button className="relative font-mono min:text-sm md:text-base tracking-widest flex justify-center">
                <props.asset className="inline-block ml-8 mr-2 h-8"/>
                {/* <img src={props.asset} alt={"Vector logo of " + props.title} className={props.imgClasses + " inline-block mr-6 h-8"} /> */}
                <span className="flex h-full items-center my-auto">{props.title.toString()}</span>
            </button>
        </a>
    )
};
