export const hasOffscreenCanvas = () => {
    return HTMLCanvasElement.prototype.transferControlToOffscreen !== undefined;
};
