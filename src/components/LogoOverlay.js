import { LOGOS_SVG } from "../assets/logos.js";

var canvas = document.getElementById("logos_canvas");
var ctx = canvas.getContext("2d");

// Dark mode logical switch
var isDark = false;

const svgTotal = 170;

let canvasOverflowScale = 1;

const gridDefaultScale = 1.5;
const extraOverflowGrid = 2; // Defines how many columns or rows should be rendered out of bounds to make scrolling smooth
let gridSize = {
  x: 17,
  y: 10,
  box: 100 * gridDefaultScale,
};
var scaleAoeSize;
var maxScaleBonus = 3;

let adapterOffset = {
  x: 0,
  y: 0,
};

let mouseCoords = {
  x: null,
  y: null,
};

const maxVelocity = 3;
let velocity = {
  x: 0,
  y: 0,
};
let targetVelocity = {
  x: 0,
  y: 0,
};

var paths = [];
function inflatePaths() {
  LOGOS_SVG.props.children.forEach((element) => {
    paths.push(new Path2D(element.props.d));
  });
}
inflatePaths();

function initCanvas() {
  ctx.scale(canvasOverflowScale, canvasOverflowScale);
  velocity.x = clampVelocity(2);
  velocity.y = clampVelocity(-3);
  targetVelocity.x = velocity.x;
  targetVelocity.y = velocity.y;
}
initCanvas();

function updateValues() {
  toggleLogosDarkMode(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;

  let screen = canvas.width;
  maxScaleBonus = 3;
  if (screen < 768) {
    gridSize.box = 60 * gridDefaultScale;
    maxScaleBonus = 1.5;
  } else if (screen < 1024) {
    gridSize.box = 75 * gridDefaultScale;
    maxScaleBonus = 2;
  } else if (screen < 1280) {
    gridSize.box = 100 * gridDefaultScale;
  } else {
    gridSize.box = 150 * gridDefaultScale;
  }

  gridSize.x = Math.ceil(canvas.width / gridSize.box) + extraOverflowGrid;
  gridSize.y = Math.ceil(canvas.height / gridSize.box) + extraOverflowGrid;
  scaleAoeSize = gridSize.box * 2;

  mouseCoords.x = null;
  mouseCoords.y = null;
  targetVelocity.x = velocity.x;
  targetVelocity.y = velocity.y;
}
updateValues();

function getScaleFromMouseCoords(x, y) {
  if (mouseCoords.x == null || mouseCoords.y == null) {
    return gridDefaultScale;
  }

  let offCoords = getAbsoluteCanvasOffsetCoordinates(0, 0, gridSize.box * x, gridSize.box * y);
  let distance = Math.hypot(
    mouseCoords.x * window.devicePixelRatio - offCoords[0] - gridSize.box * x,
    mouseCoords.y * window.devicePixelRatio - offCoords[1] - gridSize.box * y
  );

  if (distance > scaleAoeSize) {
    return gridDefaultScale;
  }
  return gridDefaultScale + ((scaleAoeSize - distance) * maxScaleBonus) / scaleAoeSize;
}

function getAbsoluteCanvasCoordinates(x, y) {
  let transform = ctx.getTransform();

  return [transform.e + x, transform.f + y];
}

function getAbsoluteCanvasOffsetCoordinates(x, y, xOff, yOff) {
  let transform = ctx.getTransform();

  return [transform.e + x - xOff, transform.f + y - yOff];
}

function getPathFromAdapter(x, y) {
  var index = ((y + adapterOffset.y + gridSize.y) % gridSize.y) * gridSize.x;
  index += (x + adapterOffset.x + gridSize.x) % gridSize.x;

  return paths[index % svgTotal];
}

function drawPaths() {
  ctx.save();
  ctx.translate(-gridSize.box, -gridSize.box);

  for (var y = 0; y < gridSize.y; y++) {
    for (var x = 0; x < gridSize.x; x++) {
      let currentScale = getScaleFromMouseCoords(x, y);
      ctx.save();
      ctx.scale(currentScale, currentScale);
      ctx.fillStyle = isDark ? "rgba(44, 69, 99, 0.8)" : "rgba(194, 200, 203,0.8)";
      ctx.fill(getPathFromAdapter(x, y), "evenodd");
      ctx.restore();
      ctx.translate(gridSize.box, 0);
    }
    // Move to new line
    ctx.translate(-gridSize.x * gridSize.box, gridSize.box);
  }

  ctx.restore();
}

function moveCanvas() {
  ctx.translate(velocity.x, velocity.y);

  var absoluteXY = getAbsoluteCanvasCoordinates(0, 0);
  if (absoluteXY[0] >= gridSize.box || absoluteXY[0] <= -gridSize.box) {
    adapterOffset.x -= Math.sign(absoluteXY[0]);
    adapterOffset.x = (gridSize.x + adapterOffset.x) % gridSize.x;
    ctx.translate(Math.sign(-absoluteXY[0]) * gridSize.box, 0);
  }

  if (absoluteXY[1] >= gridSize.box || absoluteXY[1] <= -gridSize.box) {
    adapterOffset.y -= Math.sign(absoluteXY[1]);
    adapterOffset.y = (gridSize.y + adapterOffset.y) % gridSize.y;
    ctx.translate(0, Math.sign(-absoluteXY[1]) * gridSize.box);
  }
}

const fps = 120;
var lastFrameTime = null;
function fpsLimitedSyncedFrame(render) {
  if (lastFrameTime == null || performance.now() - lastFrameTime > 1000 / fps) {
    render();
    lastFrameTime = performance.now();
  }
}

function render() {
  ctx.clearRect(
    -gridSize.box,
    -gridSize.box,
    canvas.width + extraOverflowGrid * gridSize.box,
    canvas.height + extraOverflowGrid * gridSize.box
  );
  requestAnimationFrame(render);
  drawPaths();

  fpsLimitedSyncedFrame(() => {
    updateVelocities();
    moveCanvas();
  });
}
render();

/// Mark - Responsiveness code

// Resizing:
function commitResize() {
  updateValues();
  resizeToken = null;
}

var resizeToken = null;
window.addEventListener(
  "resize",
  () => {
    if (resizeToken != null) {
      clearTimeout(resizeToken);
    }

    resizeToken = setTimeout(commitResize, 200);
  },
  false
);

// Velocity
function clampVelocity(newVelocity) {
  if (Math.abs(newVelocity) > maxVelocity) {
    return Math.sign(newVelocity) * maxVelocity;
  }

  return newVelocity;
}

const inertia = 0.95;
const radialThreshold = 0.3;
function updateVelocities() {
  if (mouseCoords.x == null || mouseCoords.y == null) {
    return;
  }
  targetVelocity.x = clampVelocity(
    ((mouseCoords.x - window.innerWidth / 2) / (window.innerWidth * radialThreshold)) * maxVelocity
  );
  targetVelocity.y = clampVelocity(
    ((mouseCoords.y - window.innerHeight / 2) / (window.innerHeight * radialThreshold)) * maxVelocity
  );

  let deltaX = targetVelocity.x - velocity.x;
  let deltaY = targetVelocity.y - velocity.y;

  if (Math.abs(deltaX) < 0.01) {
    velocity.x = targetVelocity.x;
  } else {
    velocity.x += deltaX * (1 - inertia);
  }

  if (Math.abs(deltaY) < 0.01) {
    velocity.y = targetVelocity.y;
  } else {
    velocity.y += deltaY * (1 - inertia);
  }
}

// Mouse events
document.addEventListener("mousemove", (e) => {
  mouseCoords.x = e.clientX;
  mouseCoords.y = e.clientY;
});

export function toggleLogosDarkMode(isDarkMode) {
  isDark = isDarkMode || false;
}