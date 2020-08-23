import React from 'react';

const githubPath = "https://github.com/tanish2k09/"

export default function SourceButton(props) {

    if (!props.repo && !props.url) {
        return (null);
    }

    let link = "";
    let text = "";

    if (props.url && props.isPlayStore) {
        link = props.url;
        text = "View in Play Store";
    } else {
        link = githubPath + props.repo;
        text = "View source code";
    }

    return (

        <a href={link}>
            <button className="repo-button ml-2 mr-2 font-mono font-semibold border-black border-2 px-4 py-2 text-xs">
                {text}
            </button>
        </a>
    )
}