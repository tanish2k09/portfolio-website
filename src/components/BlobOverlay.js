// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2
//
// Modified by Tanish Manku - 2020

const canvas = document.getElementById("vector_canvas");
const ctx = canvas.getContext("2d");

var anchorResizeToken = null;

const blobStates = {
  EXPANDED: 0,
  EXPANDING: 1,
  REGULAR: 2,
  COLLAPSING: 3
}

const scaleDuration = 750; // milliseconds
const fillColor = "#41ffc9"; // gotta have some teal, you know what I'm sayin
const thetaDeltaMax = 0.16;

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
    this.rampDamp = 25;

    // Track state
    this.state = blobStates.REGULAR;
    this.lastTimeFraction = 0;
    this.currentTimeFraction = 0;
    this.energyMultiplier = 1;
  }

  shouldRefresh() {
    return this.isAnimating() || (this.thetaRamp < this.thetaRampDest * 0.99);
  }

  isAnimating() {
    return (this.state === blobStates.EXPANDING || this.state === blobStates.COLLAPSING);
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
    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  updateValues() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.baseRadius = this.getDiagonal() * 0.4;

    this.updateThetaDelta();
  }

  updateThetaDelta() {
    var temp = this.getBaseThetaDelta() * this.energyMultiplier;

    temp = (temp > thetaDeltaMax) ? thetaDeltaMax : temp;
    temp = (temp < this.getBaseThetaDelta()) ? this.getBaseThetaDelta() : temp;
    this.thetaDelta = temp;
  }

  getBaseThetaDelta() {
    return (this.getDiagonal() / 2500) * 0.02;
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
    if (this.state !== blobStates.EXPANDED) {
      this.trackTime();
      this.state = blobStates.EXPANDING;
    }
  }

  cueCollapse() {
    if (this.state !== blobStates.REGULAR) {
      this.trackTime();
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
      this.currentTimeFraction = 1;
      return;
    }

    this.currentTimeFraction = this.clampTimeFraction(this.getTimeFraction() + this.lastTimeFraction);
    this.radiusOffset = this.getMultiplierToOffset(this.getMultiplierFromInterpolator(this.currentTimeFraction));
  }

  collapseRadius() {
    if (this.state === blobStates.REGULAR) {
      return;
    }

    if (this.currentTimeFraction === 0) {
      this.state = blobStates.REGULAR;
      this.radiusOffset = 0;
      return;
    }

    this.currentTimeFraction = this.clampTimeFraction(this.lastTimeFraction - this.getTimeFraction())
    this.radiusOffset = this.getMultiplierToOffset(this.getMultiplierFromInterpolator(this.currentTimeFraction));
  }

  trackTime() {
    this.recordedTime = performance.now();
    this.lastTimeFraction = this.currentTimeFraction;
  }

  getTimeFraction() {
    let difference = performance.now() - this.recordedTime;
    let timeFraction = difference / scaleDuration;

    return this.clampTimeFraction(timeFraction);
  }

  clampTimeFraction(timeFraction) {
    if (timeFraction > 1) {
      return 1;
    } else if (this.currentTimeFraction < 0) {
      return 0;
    }

    return timeFraction;
  }

  getMultiplierFromInterpolator(timeFraction) {
    // The interpolator (Ease-in-out-quint) equation:
    var multiplier = timeFraction < 0.5 ? 8 * Math.pow(timeFraction, 4) : 1 - Math.pow(-2 * timeFraction + 2, 4) / 2;
    return multiplier;
  }

  getMultiplierToOffset(multiplier) {
    return (this.getMaxRadius() - this.baseRadius) * multiplier;
  }

  getMaxRadius() {
    return this.getDiagonal() + this.bumpRadius;
  }

  isMaximized() {
    return (this.baseRadius + this.radiusOffset) >= this.getDiagonal();
  }

  /* Converts given px acceleration to energyMultiplier value */
  reactivePx(acceleration) {
    // Formula: (+ve Acceleration pixels / Diagonal pixels) * 100
    this.energyMultiplier = (Math.abs(acceleration) / this.getDiagonal()) * 400;
    console.log("Calculated multiplier = " + this.energyMultiplier);
    this.updateThetaDelta();
  }
}

const blob = new Blob(10, Math.PI / 2, Math.PI / 2);

function commitResize() {
  blob.updateValues();
  anchorResizeToken = null;
}

function loop() {
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

canvas.addEventListener("mouseenter", function (event) {
  blob.cueExpansion();
}, false);

canvas.addEventListener("mouseout", function (event) {
  blob.cueCollapse();
}, false);

window.addEventListener("resize", function (event) {
  if (anchorResizeToken != null) {
    clearTimeout(anchorResizeToken);
  }

  anchorResizeToken = setTimeout(commitResize, 200);
}, false);

/* ----------- Attach Mouse Reaction ----------- */
var lastEvent, currentEvent;
var lastSpeed = 0;

document.onmousemove = function (event) {
  currentEvent = event || window.event;
}

setInterval(motionReactiveHook, 20);

function motionReactiveHook() {
  var speed = 0;

  // If we have information for two intances to diff, proceed.
  if (lastEvent && currentEvent) {
    var movementX = Math.abs(currentEvent.screenX - lastEvent.screenX);
    var movementY = Math.abs(currentEvent.screenY - lastEvent.screenY);
    var movement = Math.hypot(movementX, movementY);

    speed = movement;
    var acceleration = speed - lastSpeed;

    blob.reactivePx(acceleration);
  }

  lastEvent = currentEvent;
  lastSpeed = speed;
}
