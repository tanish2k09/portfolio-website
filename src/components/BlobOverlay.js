// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2
//
// Modified by Tanish Manku - 2020

import { BlobInterpolator, interpolatorValue } from "./BlobInterpolator.js";

const canvas = document.getElementById("vector_canvas");
const ctx = canvas.getContext("2d");

const HALF_PI = Math.PI / 2;
const PI = Math.PI;
const radians = deg => (deg * PI) / 180.0;
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

var gScale = 1;
if (window.devicePixelRatio < 2) {
  gScale = 2;
}

const blobStates = {
  EXPANDED: 0,
  EXPANDING: 1,
  REGULAR: 2,
  COLLAPSING: 3
};

const blobEnergyStates = {
  REST: 0,
  INCREASING: 1,
  DECREASING: 2,
  MAXIMUM: 3
};

const scaleDuration = 750; // milliseconds
const energizeDuration = 1000; // milliseconds
const fillColorDark = 'rgba(65, 255, 201, 255)';
const fillColorDarkShadow = 'rgba(32, 128, 100, 25)';
const fillColor = 'rgba(48, 227, 202, 255)';
const fillColorShadow = 'rgba(48, 227, 202, 25)';
export const POLL_INTERVAL = 200;

let scaleInterpolator = new BlobInterpolator(scaleDuration);
let energyInterpolator = new BlobInterpolator(energizeDuration);

class Blob {
  constructor() {
    // use this to change the size of the screen estate to cover, in the minimum dimension
    this.screenEstateCoverageV = 0.6;
    this.screenEstateCoverageH = 0.6;
    this.radiusOffset = 0;

    this.startingAngle = HALF_PI;
    this.sectorAngle = HALF_PI;

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
    console.log(`${this.waveOneHarmonic} - ${this.waveOnePhaseMultiplier}, ${this.waveTwoHarmonic} - ${this.waveTwoPhaseMultiplier}`)

    // Calculate radius
    this.updateValues();

    // Track state
    this.state = blobStates.REGULAR;
    this.blobEnergyState = blobEnergyStates.REST;
    this.setDarkMode((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)));
  }

  isAnimating() {
    return (this.state === blobStates.EXPANDING || this.state === blobStates.COLLAPSING);
  }

  setDarkMode(isDarkMode) {
    if (isDarkMode) {
      this.fillColor = fillColorDark;
      this.fillShadow = fillColorDarkShadow;
    } else {
      this.fillColor = fillColor;
      this.fillShadow = fillColorShadow;
    }
  }

  update() {
    if (this.state === blobStates.EXPANDED) {
      return;
    }

    this.updateValues();
    this.draw();
  }

  updateValues() {
    canvas.width = window.innerWidth * gScale;
    canvas.height = window.innerHeight * gScale;
    this.baseRadius = this.getDiagonal() * 0.4;
    this.flux = this.baseRadius * this.fluxRatio;
  }

  updatePhase() {
    this.phase += this.phaseFlux;
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move to the top right corner
    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);

    // Draw the circular wave
    let endAngle = this.startingAngle + this.sectorAngle;
    for (let angle = this.startingAngle; angle < endAngle; angle += radians(0.05)) {
      // The circular wave is a superposition of 2 sin waves
      let r = Math.sin((angle - this.startingAngle) * this.waveOneHarmonic - this.phase * this.waveOnePhaseMultiplier) * this.flux / 2;
      r += Math.sin((angle - this.startingAngle) * (this.waveTwoHarmonic + this.phaseEnergyOffset) + this.phase * this.waveTwoPhaseMultiplier) * this.flux / 2;
      r += this.baseRadius + this.radiusOffset;

      let x = r * Math.cos(angle);
      let y = r * Math.sin(angle);
      ctx.lineTo(canvas.width + x, y);
    }

    ctx.closePath();
    ctx.fillStyle = this.fillColor;
    ctx.shadowBlur = 40 * gScale;
    ctx.shadowColor = this.fillShadow;
    ctx.fill();
  }

  getDiagonal() {
    return Math.hypot(canvas.width, canvas.height);
  }

  animate() {
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
    this.radiusOffset = this.getMultiplierToOffset(
      interpolatorValue(scaleInterpolator.currentTimeFraction)
    );
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
    this.radiusOffset = this.getMultiplierToOffset(
      interpolatorValue(scaleInterpolator.currentTimeFraction)
    );
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
    if (this.blobEnergyState === blobEnergyStates.MAXIMUM) {
      energyInterpolator.trackTime();
      this.blobEnergyState = blobEnergyStates.DECREASING;
    }
  }

  energize() {
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
    this.phaseEnergyOffsetMax = Math.floor(map(Math.random(), 0, 1, this.phaseEnergyOffsetMinDeviation, this.phaseEnergyOffsetMaxDeviation)) * HALF_PI;
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
    let interpolationFraction = interpolatorValue(energyInterpolator.currentTimeFraction);
    this.phaseEnergyOffset = interpolationFraction * this.phaseEnergyOffsetMax;
    this.phaseFlux = interpolationFraction * (this.phaseFluxMax - this.phaseFluxMin) + this.phaseFluxMin;
  }

  increaseEnergy() {
    if (this.blobEnergyState === blobEnergyStates.MAXIMUM) {
      return;
    }

    if (energyInterpolator.currentTimeFraction === 1) {
      this.blobEnergyState = blobEnergyStates.MAXIMUM;
    }

    energyInterpolator.syncAddFraction();
    let interpolationFraction = interpolatorValue(energyInterpolator.currentTimeFraction);
    this.phaseEnergyOffset = interpolationFraction * this.phaseEnergyOffsetMax;
    this.phaseFlux = interpolationFraction * (this.phaseFluxMax - this.phaseFluxMin) + this.phaseFluxMin;
  }
}

const blob = new Blob(Math.PI / 2, Math.PI / 2);

function loop() {
  blob.energize();
  blob.animate();
  blob.update();
  window.requestAnimationFrame(loop);
}

// Repeat the animation frames
loop();

// I hate to move this outside the blob but phase should be FPS-locked:
const PHASE_UPDATE_INTERVAL = 16; // Milliseconds
function updateBlobPhase() {
    blob.updatePhase();
    setTimeout(updateBlobPhase, PHASE_UPDATE_INTERVAL);
}
updateBlobPhase();

export function getBlob() {
  return blob;
}

require('./BlobInteraction');