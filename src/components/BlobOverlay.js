// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2
//
// Modified by Tanish Manku - 2020

import { BlobInterpolator, interpolatorValue } from "./BlobInterpolator.js";

const canvas = document.getElementById("vector_canvas");
const ctx = canvas.getContext("2d");

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

const scaleDuration = 1000; // milliseconds
const fillColorDark = 'rgba(65, 255, 201, 255)';
const fillColorDarkShadow = 'rgba(32, 128, 100, 25)';
const fillColor = 'rgba(48, 227, 202, 255)';
const fillColorShadow = 'rgba(48, 227, 202, 25)';
const reactivePollInterval = 16.66;
const widthBreakPoint = 768;

let scaleInterpolator = new BlobInterpolator(scaleDuration);
let energyInterpolator = new BlobInterpolator(scaleDuration);

var anchorResizeToken = null;

class Blob {
  constructor(number, sectorAngle, minDeviation) {
    // use this to change the size of the screen estate to cover, in the minimum dimension
    this.screenEstateCoverageV = 0.6;
    this.screenEstateCoverageH = 0.6;

    if (minDeviation > Math.PI * 2) {
      minDeviation = Math.PI * 2;
    }

    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = number;
    this.step = sectorAngle / this.segments;

    // Stores points that are "pinned" and are points where bumps occur
    this.anchors = [];

    // Controls angular deviation
    this.thetaOff = [];

    // Calculate radius
    this.updateValues();

    // Controls radius of buldge
    this.bumpRadius = this.baseRadius / 7;
    this.halfBumpRadius = this.bumpRadius / 2;

    // Just an added value to base radius
    this.radiusOffset = 0;

    // Keeps track of current bump radii
    this.radii = [];

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0, 0);
      this.radii.push(Math.random() * this.bumpRadius - this.halfBumpRadius);
      this.thetaOff.push(Math.random() * (Math.PI * 2 - minDeviation) + minDeviation);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = Math.pow(5, Math.max(10 - (window.devicePixelRatio / 0.25), 1));
    this.thetaDelta = this.getBaseThetaDelta();

    // Track state
    this.state = blobStates.REGULAR;
    this.blobEnergyState = blobEnergyStates.REST;
    this.setDarkMode((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)));
  }

  shouldRefresh() {
    return this.isAnimating() || (this.thetaRamp < this.thetaRampDest * 0.99);
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.shouldRefresh()) {
      this.updateValues();
    }

    this.updateAnchors();

    ctx.beginPath();
    ctx.moveTo(0, 0);

    bezierSkin(this.anchors, false);

    ctx.lineTo(canvas.width, 0);
    ctx.fillStyle = this.fillColor;
    ctx.shadowBlur = 40 * gScale;
    ctx.shadowColor = this.fillShadow;
    ctx.fill();
  }

  updateValues() {
    canvas.width = window.innerWidth * gScale;
    canvas.height = window.innerHeight * gScale;
    this.baseRadius = this.getDiagonal() * 0.4;
  }

  getBaseThetaDelta() {
    // For 1080p -> 1627 should be good at 0.0027
    // For macbooks -> 2059 should be good at 0.016, 0.06
    let density = window.devicePixelRatio / 0.25;

    return Math.min(Math.pow(10, density - 10) * 2, 0.03);
  }

  getMaxThetaDelta() {
    return Math.min(this.getBaseThetaDelta() * 8, 0.08);
  }

  updateAnchors() {
    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += this.thetaDelta;

    // Recreate anchors, initially with first anchor
    this.anchors = [canvas.width, this.baseRadius];

    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.baseRadius + this.radiusOffset + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(canvas.width - x, y);
    }
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

  getMultiplierToThetaDelta(multiplier) {
    return (this.getMaxThetaDelta() - this.getBaseThetaDelta()) * multiplier + this.getBaseThetaDelta();
  }

  getMaxRadius() {
    return this.getDiagonal() + this.bumpRadius;
  }

  isMaximized() {
    return this.radiusOffset >= this.getDiagonal();
  }

  /* Converts given px acceleration to energy value */
  reactivePx(speed) {
    if (this.blobEnergyState === blobEnergyStates.INCREASING) {
      return;
    }

    // Here we calculate the threshold for minimum movement required for energy gain
    // Formula: (+ve Speed pixels / Diagonal pixels) * 100
    // This is at max 1 / reactivePollInterval (0.06 at 60fps) and 0 at min
    // We wanna normalize it to "0.1% screen in 1 interval" as threshold
    let isAboveThreshold = Math.abs(speed) > (this.getDiagonal() * 0.001);

    if (isAboveThreshold) {
      energyInterpolator.trackTime();
      this.blobEnergyState = blobEnergyStates.INCREASING;
    } else if (this.blobEnergyState !== blobEnergyStates.DECREASING) {
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

  reduceEnergy() {
    if (this.blobEnergyState === blobEnergyStates.REST) {
      return;
    }

    if (this.thetaDelta === this.getBaseThetaDelta() || energyInterpolator.currentTimeFraction < 0) {
      this.blobEnergyState = blobEnergyStates.REST;
    }

    energyInterpolator.syncSubtractFraction();
    this.thetaDelta = this.getMultiplierToThetaDelta(
      interpolatorValue(energyInterpolator.currentTimeFraction)
    );
  }

  increaseEnergy() {
    if (this.blobEnergyState === blobEnergyStates.MAXIMUM) {
      return;
    }

    if (energyInterpolator.currentTimeFraction === 1) {
      this.blobEnergyState = blobEnergyStates.MAXIMUM;
    }


    energyInterpolator.syncAddFraction();
    this.thetaDelta = this.getMultiplierToThetaDelta(
      interpolatorValue(energyInterpolator.currentTimeFraction)
    );
  }
}

const blob = new Blob(10, Math.PI / 2, Math.PI / 2);

function commitResize() {
  blob.updateValues();
  anchorResizeToken = null;
}

function loop() {
  blob.energize();
  blob.animate();
  blob.update();
  window.requestAnimationFrame(loop);
}

// Repeat the animation frames
loop();

// array of xy coords, closed boolean
function bezierSkin(bez, closed = true) {
  const avg = calcAvgs(bez);
  const leng = bez.length;

  if (closed) {
    ctx.moveTo(avg[0], avg[1]);

    for (let i = 2; i < leng; i += 2) {
      let n = i + 1;
      ctx.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }

    ctx.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
  } else {
    ctx.moveTo(bez[0], bez[1]);
    ctx.lineTo(avg[0], avg[1]);

    for (let i = 2; i < leng - 2; i += 2) {
      let n = i + 1;
      ctx.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }

    ctx.lineTo(bez[leng - 2], bez[leng - 1]);
  }
}

// create anchor points by averaging the control points
function calcAvgs(p) {
  const avg = [];
  const leng = p.length;
  let prev;

  for (let i = 2; i < leng; i++) {
    prev = i - 2;
    avg.push((p[prev] + p[i]) / 2);
  }

  // close
  avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
  return avg;
}

export function getBlob() {
  return blob;
}

/* ----------- Attach Listeners ----------- */

window.addEventListener("resize", function (event) {
  if (window.innerWidth < widthBreakPoint) {
    return;
  }

  if (anchorResizeToken != null) {
    clearTimeout(anchorResizeToken);
  }

  anchorResizeToken = setTimeout(commitResize, 200);
}, false);

/* ----------- Attach Mouse Reaction ----------- */
var lastEvent, currentEvent;

document.onmousemove = function (event) {
  currentEvent = event || window.event;
}

// Should be about 60fps
setInterval(motionReactiveHook, reactivePollInterval);

function motionReactiveHook() {
  var speed = 0;

  // If we have information for two intances to diff, proceed.
  if (lastEvent && currentEvent) {
    var movementX = Math.abs(currentEvent.screenX - lastEvent.screenX);
    var movementY = Math.abs(currentEvent.screenY - lastEvent.screenY);
    var movement = Math.hypot(movementX, movementY);

    // Speed = total distance moved / time since last record
    speed = movement / reactivePollInterval;

    blob.reactivePx(speed);
  }

  lastEvent = currentEvent;
}
