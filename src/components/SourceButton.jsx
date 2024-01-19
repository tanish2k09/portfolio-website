import React from 'react';


export default function SourceButton(props) {

    var ctaClasses = "border-black hover:text-primary hover:bg-black";
    const buttonClasses = "transition-colors duration-500 ml-2 mr-2 font-body border-2 px-4 py-2 text-sm rounded-md h-full";

    if (props.ctaClasses) {
        ctaClasses = props.ctaClasses;
    }

    function exciteBlob() {
        if (!props.useWorker) return;
        const worker = props.useWorker;
        console.log("Exciting blob");

        worker.instance.reactivePx(true);;
    }

    if (!props.url) {
        return (
            <button className={`${buttonClasses} ${ctaClasses}`} onClick={exciteBlob}>
                {props.text}
            </button>
        )
    }

    return (
        <a href={props.url}>
            <button className={`${buttonClasses} ${ctaClasses}`}>
                {props.text}
            </button>
        </a>
    )
}