/*
NOTE: 
This file is a Web Worker. It is run in a separate thread from the main.
This file is likely executed twice, once in the main JS thread to read all the exports, sorta like 'require'
and once in a separate thread to actually run the code, created with 'new Worker()'.

Because of this detail, global vars have been made null until first init.
*/

import { Blob, BlobRenderer, HALF_PI } from "./BlobOverlay.js";

export const MSG_TYPE = {
    INIT: "init",
    SET_DARK_MODE: "setDarkMode",
    SET_EXPANSION: "expansion",
    RESIZE: "resize",
    ENERGIZE: "energize",
};

let blob = null;
let renderer = null;

onmessage = function (event) {
    switch (event.data.type) {
        case MSG_TYPE.INIT:
            onInitMessage(event.data);
            break;
        case MSG_TYPE.RESIZE:
            onResizeMessage(event.data);
            break;
        case MSG_TYPE.SET_EXPANSION:
            onExpandMessage(event.data);
            break;
        case MSG_TYPE.SET_DARK_MODE:
            onSetDarkModeMessage(event.data);
            break;
        case MSG_TYPE.ENERGIZE:
            blob.reactivePx(true);
            break;
        default:
            return;
    }
};

function onInitMessage(data) {
    const { canvas, window } = data;
    const ctx = canvas.getContext("2d");

    if (blob === null) {
        blob = new Blob(HALF_PI, HALF_PI);
    }

    if (renderer === null) {
        renderer = new BlobRenderer(blob);
    }

    // Make sure any previous calculations are cleared
    renderer.stopLoop();

    // Refresh blob attributes
    blob.setContext(ctx);
    blob.setWindow(window);

    // First render frame
    renderer.startLoop();
}

function onResizeMessage(data) {
    const { window } = data;
    blob.setWindow(window);
}

function onExpandMessage(data) {
    const { value } = data;
    blob.setExpansion(value);
}

function onSetDarkModeMessage(data) {
    const { value } = data;
    blob.setDarkMode(value);
}
