import React from 'react';

export default function SocialButton(props) {
    return (
        <a href={props.link}>
            <button className="group social-button font-mono text-xs md:text-base tracking-wide flex justify-center backdrop-blur-md rounded-lg">
                <props.asset className={`inline-block mr-2 ml-2 h-8 ${props.colors} ${props.activeLogoColors}`} />
                {/* <img src={props.asset} alt={"Vector logo of " + props.title} className={props.imgClasses + " inline-block mr-6 h-8"} /> */}
                <span className={`flex h-full items-center my-auto mr-6 md:group-hover:max-w-social ${props.textColors} ${props.activeColors}`}>{props.title.toString()}</span>
            </button>
        </a>
    )
};
