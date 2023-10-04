import React from 'react';

export default function Tag(props) {
    return (
        <span className={"tag inline-block text-xs font-medium transition-colors duration-500 " + props.colorClass}>
            {props.text}
        </span>
    )
}