// Credit for source to Zevan Rosser
// Codepen source available at the following link: https://codepen.io/ZevanRosser/pen/bde8e879b344202cf06379e44f9e80b2

// Slightly modified by Tanish Manku

const HALF_PI = Math.PI / 2;
const canvas = document.getElementById("vector_canvas");
const c = canvas.getContext("2d");

class Blob {
  constructor() {
    // use this to change the size of the screen estate to cover, in the minimum dimension
    this.screenEstateCoverageV = 0.8;
    this.screenEstateCoverageH = 0.8;

    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = 12;
    this.step = HALF_PI / this.segments;
    this.anchors = [];
    this.radii = [];
    this.thetaOff = [];

    this.bumpRadius = 100;
    this.halfBumpRadius = this.bumpRadius / 2;

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0, 0);
      this.radii.push(Math.random() * this.bumpRadius - this.halfBumpRadius);
      this.thetaOff.push(Math.random() * 2 * Math.PI + Math.PI);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = 25;
  }

  updateValues() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.radius = Math.min(
      canvas.width * this.screenEstateCoverageH,
      canvas.height * this.screenEstateCoverageV
    );
  }

  update() {
    this.updateValues();

    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.02;
    this.anchors = [canvas.width, this.radius];

    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.radius + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(canvas.width - x, y);
    }

    c.save();
    c.fillStyle = "#1de9b6";
    c.beginPath();
    c.moveTo(0, 0);

    bezierSkin(this.anchors, false);

    c.lineTo(canvas.width, 0);
    c.fill();
    c.restore();
  }
}

const blob = new Blob();

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
