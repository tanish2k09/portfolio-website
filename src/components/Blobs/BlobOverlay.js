// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2
//
// Modified by Tanish Manku - 2020

import {
    BlobInterpolator,
    interpolatorValue,
    linearInterpolatorValue,
    colorInterpolatorValue,
    interpolateColor,
} from "./BlobInterpolator.js";

export const HALF_PI = Math.PI / 2;
export const BLOB_PHASE_FPS = 120;
const PI = Math.PI;
const radians = (deg) => (deg * PI) / 180.0;
const map = (value, x1, y1, x2, y2) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
// eslint-disable-next-line no-restricted-globals

const blobStates = {
    EXPANDED: 0,
    EXPANDING: 1,
    REGULAR: 2,
    COLLAPSING: 3,
};

const blobEnergyStates = {
    REST: 0,
    INCREASING: 1,
    DECREASING: 2,
    MAXIMUM: 3,
};

const scaleDuration = 1000; // milliseconds
const energizeDuration = 2000; // milliseconds
const fullEnergyDecayDelay = 3000; // milliseconds
const darkFillColor = "#00d8b6";
const fillColor = "#00d8b6";
const expandedDarkColor = "#101924";
const RADIAN_STEP = 0.5;
export const POLL_INTERVAL = 200;

let scaleInterpolator = new BlobInterpolator(scaleDuration);
let energyInterpolator = new BlobInterpolator(energizeDuration);
let decayInterpolator = new BlobInterpolator(fullEnergyDecayDelay);

export class Blob {
    constructor(startingAngle, sectorAngle) {
        this.radiusOffset = 0;

        this.startingAngle = startingAngle;
        this.sectorAngle = sectorAngle;

        // Controls extent of "distortions"
        // Let's say, 5% of the blob itself is the wave
        this.fluxRatio = 0.05;
        this.phase = Math.random() * PI * 2;
        this.waveOneHarmonic = 5 + Math.floor(Math.random() * 3);
        this.waveTwoHarmonic = this.waveOneHarmonic + 2 + Math.floor(Math.random() * 12);
        this.waveOnePhaseMultiplier = 1 + Math.floor(Math.random() * 5);
        this.waveTwoPhaseMultiplier = this.waveOnePhaseMultiplier + 1 + Math.floor(Math.random() * 12);
        this.phaseFluxMin = 0.005;
        this.phaseFluxMax = 0.03;
        this.phaseFlux = this.phaseFluxMin;
        this.phaseEnergyOffset = 0;
        this.phaseEnergyOffsetMaxDeviation = 16;
        this.phaseEnergyOffsetMinDeviation = 1;
        this.renewPhaseEnergyOffset();
        console.log(
            `${this.waveOneHarmonic} - ${this.waveOnePhaseMultiplier}, ${this.waveTwoHarmonic} - ${this.waveTwoPhaseMultiplier}`
        );

        // Track state
        this.state = blobStates.REGULAR;
        this.blobEnergyState = blobEnergyStates.REST;

        this.darkMode = true; // default value for now
        this.gScale = 2; // default value for now
    }

    isAnimating() {
        return this.state === blobStates.EXPANDING || this.state === blobStates.COLLAPSING;
    }

    setDarkMode(isDarkMode) {
        this.darkMode = isDarkMode;
    }

    updateRender() {
        if (this.state === blobStates.EXPANDED) {
            return;
        }

        this.updateValues();
        this.generateVertices();
        this.draw();
    }

    updateValues() {
        this.ctx.canvas.width = this.window.innerWidth * this.gScale;
        this.ctx.canvas.height = this.window.innerHeight * this.gScale;
        this.baseRadius = this.getDiagonal() * 0.4;
        this.flux = this.baseRadius * this.fluxRatio;
    }

    updatePhase() {
        this.phase += this.phaseFlux;
    }

    generateVertices() {
        // Empty vertices array
        this.vertices = [];

        // Generate the sample points on the wave
        let endAngle = this.startingAngle + this.sectorAngle;
        for (let angle = this.startingAngle; angle < endAngle + RADIAN_STEP; angle += radians(RADIAN_STEP)) {
            // The circular wave is a superposition of 2 sin waves
            let r =
                (Math.sin(
                    (angle - this.startingAngle) * this.waveOneHarmonic - this.phase * this.waveOnePhaseMultiplier
                ) *
                    this.flux) /
                2;
            r +=
                (Math.sin(
                    (angle - this.startingAngle) * (this.waveTwoHarmonic + this.phaseEnergyOffset) +
                        this.phase * this.waveTwoPhaseMultiplier
                ) *
                    this.flux) /
                2;
            r += this.baseRadius + this.radiusOffset;

            let x = r * Math.cos(angle);
            let y = r * Math.sin(angle);
            this.vertices.push({ x: x, y: y });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.ctx.beginPath();
        this.ctx.moveTo(this.ctx.canvas.width, 0);

        // Draw the vertices
        this.vertices.forEach((vertex) => {
            this.ctx.lineTo(this.ctx.canvas.width + vertex.x, vertex.y);
        });

        this.ctx.closePath();
        this.ctx.fillStyle = this.getFillColor();

        if (!this.darkMode) {
            this.ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
            this.ctx.shadowBlur = 40 * this.gScale;
            this.ctx.fill();
        }

        this.ctx.shadowColor = this.getFillColor();
        this.ctx.shadowBlur = 2 * this.gScale;
        this.ctx.fill();
    }

    getDiagonal() {
        return Math.hypot(this.ctx.canvas.width, this.ctx.canvas.height);
    }

    syncScale() {
        switch (this.state) {
            case blobStates.EXPANDING:
                this.expandRadius();
                break;

            case blobStates.COLLAPSING:
                this.collapseRadius();
                break;

            default:
                return;
        }
    }

    cueExpansion() {
        if (this.state !== blobStates.EXPANDED && this.state !== blobStates.EXPANDING) {
            scaleInterpolator.trackTime();
            this.state = blobStates.EXPANDING;
        }
    }

    cueCollapse() {
        if (this.state !== blobStates.REGULAR && this.state !== blobStates.COLLAPSING) {
            scaleInterpolator.trackTime();
            this.state = blobStates.COLLAPSING;
        }
    }

    setExpansion(value) {
        if (value) {
            this.cueExpansion();
        } else {
            this.cueCollapse();
        }
    }

    expandRadius() {
        if (this.state === blobStates.EXPANDED) {
            return;
        }

        if (this.isMaximized()) {
            this.state = blobStates.EXPANDED;
            this.radiusOffset = this.getMaxRadius();
            scaleInterpolator.currentTimeFraction = 1;
            return;
        }

        scaleInterpolator.syncAddFraction();
        this.radiusOffset = this.getMultiplierToOffset(interpolatorValue(scaleInterpolator.currentTimeFraction));
    }

    collapseRadius() {
        if (this.state === blobStates.REGULAR) {
            return;
        }

        if (scaleInterpolator.currentTimeFraction === 0) {
            this.state = blobStates.REGULAR;
            this.radiusOffset = 0;
        }

        scaleInterpolator.syncSubtractFraction();
        this.radiusOffset = this.getMultiplierToOffset(interpolatorValue(scaleInterpolator.currentTimeFraction));
    }

    getMultiplierToOffset(multiplier) {
        return (this.getMaxRadius() - this.baseRadius) * multiplier;
    }

    getMaxRadius() {
        return this.getDiagonal() + this.flux;
    }

    isMaximized() {
        return this.radiusOffset >= this.getDiagonal();
    }

    /* Converts given px acceleration to energy value */
    reactivePx(isAboveThreshold) {
        // One-shot the increase if it was ever trigger, let it complete
        if (this.blobEnergyState === blobEnergyStates.INCREASING) {
            return;
        }

        // Should increase energy
        // If blob is already decreasing, it will be forced to increase again
        if (isAboveThreshold) {
            energyInterpolator.trackTime();
            this.blobEnergyState = blobEnergyStates.INCREASING;
            return;
        }

        // Not enough interaction, should decay energy
        // Blob is either maximum or at rest
        // Don't bother blob if it's at REST.
        // Energy decay should happen after decay delay
        if (this.blobEnergyState === blobEnergyStates.MAXIMUM && decayInterpolator.getTimeFraction() >= 1) {
            energyInterpolator.trackTime();
            this.blobEnergyState = blobEnergyStates.DECREASING;
        }
    }

    energize() {
        this.reactivePx(false);

        switch (this.blobEnergyState) {
            case blobEnergyStates.INCREASING:
                this.increaseEnergy();
                break;

            case blobEnergyStates.DECREASING:
                this.reduceEnergy();
                break;

            default:
                return;
        }
    }

    renewPhaseEnergyOffset() {
        this.phaseEnergyOffsetMax =
            Math.floor(
                map(Math.random(), 0, 1, this.phaseEnergyOffsetMinDeviation, this.phaseEnergyOffsetMaxDeviation)
            ) * HALF_PI;
    }

    reduceEnergy() {
        if (this.blobEnergyState === blobEnergyStates.REST) {
            return;
        }

        if (this.phaseEnergyOffset === 0 || energyInterpolator.currentTimeFraction < 0) {
            // A fun little addition, we change the energetic phase shift each time it resets
            this.renewPhaseEnergyOffset();
            this.blobEnergyState = blobEnergyStates.REST;
        }

        energyInterpolator.syncSubtractFraction();
        let interpolationFraction = linearInterpolatorValue(energyInterpolator.currentTimeFraction);
        this.phaseEnergyOffset = interpolationFraction * this.phaseEnergyOffsetMax;
        this.phaseFlux = interpolationFraction * (this.phaseFluxMax - this.phaseFluxMin) + this.phaseFluxMin;
    }

    increaseEnergy() {
        if (this.blobEnergyState === blobEnergyStates.MAXIMUM) {
            return;
        }

        if (energyInterpolator.currentTimeFraction === 1) {
            this.blobEnergyState = blobEnergyStates.MAXIMUM;

            // Start tracking the decay timer
            decayInterpolator.trackTime();
        }

        energyInterpolator.syncAddFraction();
        let interpolationFraction = linearInterpolatorValue(energyInterpolator.currentTimeFraction);
        this.phaseEnergyOffset = interpolationFraction * this.phaseEnergyOffsetMax;
        this.phaseFlux = interpolationFraction * (this.phaseFluxMax - this.phaseFluxMin) + this.phaseFluxMin;
    }

    getFillColor() {
        // if light mode
        if (!this.darkMode) {
            return fillColor;
        } else if (this.state === blobStates.REGULAR) {
            return darkFillColor;
        } else if (this.state === blobStates.EXPANDED) {
            return expandedDarkColor;
        }

        // We interpolate color on expansion if dark mode is enabled
        return interpolateColor(
            darkFillColor,
            expandedDarkColor,
            colorInterpolatorValue(scaleInterpolator.currentTimeFraction)
        );
    }

    setContext(ctx) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
    }

    setWindow(window) {
        this.window = {
            devicePixelRatio: window.devicePixelRatio,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        };

        if (this.window.devicePixelRatio < 2) {
            this.gScale = 2;
        } else {
            this.gScale = 1;
        }
    }
}

export class BlobRenderer {
    constructor(blob) {
        this.blob = blob;
        this.animationFrameId = null;
        this.lastFrameTime = 0;
    }

    startLoop() {
        this.blob.energize();
        this.blob.syncScale();

        // Update the phase of the blob with an FPS-limit
        if (performance.now() - this.lastFrameTime > 1000 / BLOB_PHASE_FPS) {
            this.blob.updatePhase();
            this.lastFrameTime = performance.now();
        }

        // Draw the blob if necessary
        this.blob.updateRender();

        // Requeue the render function
        this.animationFrameId = requestAnimationFrame(this.startLoop.bind(this));
    }

    stopLoop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}
