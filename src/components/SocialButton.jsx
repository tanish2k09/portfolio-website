import React from 'react';

export default function SocialButton(props) {

    return (
        <a href={props.link}>
            <button className="social-button font-mono min:text-xs md:text-base tracking-wide flex justify-center">
                <props.asset className="inline-block mr-2 ml-2 h-8 fill-contactlight dark:fill-contactdark"/>
                {/* <img src={props.asset} alt={"Vector logo of " + props.title} className={props.imgClasses + " inline-block mr-6 h-8"} /> */}
                <span className="flex h-full items-center my-auto mr-6 text-contactlight dark:text-contactdark">{props.title.toString()}</span>
            </button>
        </a>
    )
};
