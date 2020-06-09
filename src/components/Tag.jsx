import React from 'react';

export default function Tag(props) {
    return (
        <span className={"tag inline-block text-xs font-medium " + props.colorClass}>
            {props.text}
        </span>
    )
}