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

export function clampTimeFraction(timeFraction) {
    if (timeFraction > 1) {
        return 1;
    } else if (timeFraction < 0) {
        return 0;
    }

    return timeFraction;
}

export function interpolatorValue(tf) {
    return tf < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * tf, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * tf + 2, 2)) + 1) / 2;
}

export function linearInterpolatorValue(tf) {
    return tf;
}