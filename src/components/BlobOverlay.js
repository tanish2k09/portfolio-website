// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2
//
// Modified by Tanish Manku - 2020

const canvas = document.getElementById("vector_canvas");
const c = canvas.getContext("2d");

const blobStates = {
  EXPANDED: 0,
  EXPANDING: 1,
  REGULAR: 2,
  COLLAPSING: 3
}

const framesToTarget = 60;

class Blob {
  constructor(number, sectorAngle, minDeviation, ) {
    // use this to change the size of the screen estate to cover, in the minimum dimension
    this.screenEstateCoverageV = 0.8;
    this.screenEstateCoverageH = 0.8;

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

    // Track callback handle numbers
    this.expansionHandle = undefined;
    this.collapseHandle = undefined;

    // Fill color
    this.fillColor = "#33FFCC";
  }

  updateValues() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (this.isMaximized) {
      this.radiusOffset = this.getDiagonal();
    }

    this.baseRadius = Math.min(
      canvas.width * this.screenEstateCoverageH,
      canvas.height * this.screenEstateCoverageV
    );
  }

  update() {
    if (this.isMaximized) {
      c.fillStyle = this.fillColor;
      c.fill();
      return;
    }

    this.updateValues();

    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.02;
    this.anchors = [canvas.width, this.baseRadius];

    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.baseRadius + this.radiusOffset + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(canvas.width - x, y);
    }


    c.beginPath();
    c.moveTo(0, 0);

    bezierSkin(this.anchors, false);

    c.lineTo(canvas.width, 0);
    c.fillStyle = this.fillColor;
    c.fill();
  }

  getDiagonal() {
    return Math.hypot(canvas.width, canvas.height);
  }

  expandRadius() {
    if (this.state === blobStates.EXPANDED) {
      return;
    }

    if (this.baseRadius + this.radiusOffset > this.getDiagonal()) {
      this.state = blobStates.EXPANDED;
      this.radiusOffset = this.getDiagonal();
      return;
    }

    if (this.collapseHandle) {
      cancelAnimationFrame(this.collapseHandle);
      this.collapseHandle = undefined;
    }

    this.state = blobStates.EXPANDING;

    this.radiusOffset += this.getDiagonal() / framesToTarget;
    this.expansionHandle = requestAnimationFrame(this.expandRadius.bind(this));
  }

  fillCanvas() {
    c.save();
    c.fillStyle = this.fillColor;
    c.fill(0, 0, canvas.width, canvas.height);
    c.restore();
  }

  collapseRadius() {
    if (this.state === blobStates.REGULAR) {
      return;
    }

    if (this.radiusOffset <= 0) {
      this.state = blobStates.REGULAR;
      this.radiusOffset = 0;

      return;
    }

    if (this.expansionHandle) {
      cancelAnimationFrame(this.expansionHandle);
      this.expansionHandle = undefined;
    }

    if (this.state === blobStates.EXPANDED) {
      this.radiusOffset = this.getDiagonal();
    }

    this.state = blobStates.COLLAPSING;

    this.radiusOffset -= (this.getDiagonal() - this.baseRadius - 40) / framesToTarget;
    this.collapseHandle = requestAnimationFrame(this.collapseRadius.bind(this));
  }
}

const blob = new Blob(10, Math.PI / 2, Math.PI / 2);

canvas.addEventListener("mouseenter", function (event) {
  blob.expandRadius();
}, false);

canvas.addEventListener("mouseout", function (event) {
  blob.collapseRadius();
}, false);

function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
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
    c.moveTo(avg[0], avg[1]);

    for (let i = 2; i < leng; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }

    c.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
  } else {
    c.moveTo(bez[0], bez[1]);
    c.lineTo(avg[0], avg[1]);

    for (let i = 2; i < leng - 2; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }

    c.lineTo(bez[leng - 2], bez[leng - 1]);
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
