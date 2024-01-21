// The way is interpolator class works is it keeps track of the
// "X-Axis" so each interpolation is reversible even though the curve may not be (mathematically)
//
// We're mostly interested in currentTimeFraction because it repesents the cumulative state
// getTimeFraction() only returns the time fraction elapsed since the last time sync
// This does NOT repesent the current progress of the animation
//
// SyncAddFraction and SyncSubtractFraction control the "direction" of interpolation
// They control how the last elapsed time fraction is added to the total interpolation progress
// This is what allows interruption and "reversal" of the animation.
export class BlobInterpolator {
    constructor(scaleDuration) {
        this.trackedTime = null;
        this.lastTimeFraction = 0;
        this.currentTimeFraction = 0;
        this.scaleDuration = scaleDuration;
    }

    trackTime() {
        this.trackedTime = performance.now();
        this.lastTimeFraction = this.currentTimeFraction;
    }

    getTimeFraction() {
        let difference = performance.now() - this.trackedTime;
        let timeFraction = difference / this.scaleDuration;

        return clampTimeFraction(timeFraction);
    }

    syncAddFraction() {
        this.currentTimeFraction = clampTimeFraction(this.lastTimeFraction + this.getTimeFraction());
    }

    syncSubtractFraction() {
        this.currentTimeFraction = clampTimeFraction(this.lastTimeFraction - this.getTimeFraction());
    }
}

export const clampTimeFraction = (timeFraction) => {
    if (timeFraction > 1) {
        return 1;
    } else if (timeFraction < 0) {
        return 0;
    }

    return timeFraction;
};

export const interpolatorValue = (tf) => {
    return tf < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * tf, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * tf + 2, 2)) + 1) / 2;
};

export const linearInterpolatorValue = (tf) => {
    // Perfectly linear 1:1 mapping
    return tf;
};

export const colorInterpolatorValue = (tf) => {
    // For the first half (0.5) change nothing
    // For the second half, ramp linearly
    return tf < 0.5 ? 0 : 2 * tf - 1;
};

export const interpolateColor = (color1, color2, percent) => {
    // Convert the hex colors to RGB values
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    // Interpolate the RGB values
    const r = Math.round(r1 + (r2 - r1) * percent);
    const g = Math.round(g1 + (g2 - g1) * percent);
    const b = Math.round(b1 + (b2 - b1) * percent);

    // Convert the interpolated RGB values back to a hex color
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const interpolateColorWithAlpha = (color1, color2, alpha1, alpha2, percent) => {
    // Convert the hex colors to RGB values
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    // Interpolate the RGB values
    const r = Math.round(r1 + (r2 - r1) * percent);
    const g = Math.round(g1 + (g2 - g1) * percent);
    const b = Math.round(b1 + (b2 - b1) * percent);
    const a = alpha1 + (alpha2 - alpha1) * percent;

    // Convert the interpolated RGB values back to a hex color
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
