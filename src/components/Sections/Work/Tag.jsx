import React from 'react';

export default function Tag(props) {
    return (
        <div className={"rounded-full my-1 py-1 px-2 whitespace-nowrap relative grid items-center text-xs font-medium transition-colors duration-700 " + props.colorClass}>
            <span>
                {props.text}
            </span>
        </div>
    )
}