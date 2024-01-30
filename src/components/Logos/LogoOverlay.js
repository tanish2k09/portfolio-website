import { LOGOS_SVG, SVG_TOTAL, SVG_GRID_FACTORS } from "../../assets/logos.js";

const gridDefaultScale = 1.5;
const extraOverflowGrid = 2; // Defines how many columns or rows should be rendered out of bounds to make scrolling smooth
const maxVelocity = 3;
const inertia = 0.95;
const radialThreshold = 0.3;
const lightColor = "rgba(0, 0, 0, 0.15)";
const darkColor = "rgba(44, 69, 99, 0.8)";

export class LogosGrid {
    constructor() {
        this.isDark = false;
        this.gridSize = {
            x: SVG_GRID_FACTORS.x,
            y: SVG_GRID_FACTORS.y,
            box: 150 * gridDefaultScale,
        };
        this.scaleAoeSize = this.gridSize.box * 2;
        this.maxScaleBonus = 3;
        this.adapterOffset = {
            x: 0,
            y: 0,
        };
        this.mouseCoords = {
            x: null,
            y: null,
        };
        this.velocity = {
            x: clampVelocity(2),
            y: clampVelocity(-3),
        };
        this.targetVelocity = {
            x: this.velocity.x,
            y: this.velocity.y,
        };
        this.darkMode = true;
        this.paths = [];
        this.inflatePaths();
        this.shufflePaths();
    }

    inflatePaths() {
        LOGOS_SVG.props.children.forEach((element) => {
            this.paths.push(new Path2D(element.props.d));
        });
    }

    // Fisher-Yates Sorting Algorithm
    shufflePaths() {
        for (let i = this.paths.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.paths[i], this.paths[j]] = [this.paths[j], this.paths[i]];
        }
    }

    setContext(ctx) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
    }

    setWindow(window) {
        this.window = window;
    }

    setDarkMode(isDarkMode) {
        this.darkMode = isDarkMode;
    }

    // Used to update the values of the grid upon resize
    updateValues() {
        this.canvas.width = this.window.innerWidth * this.window.devicePixelRatio;
        this.canvas.height = this.window.innerHeight * this.window.devicePixelRatio;

        let screen = this.canvas.width;
        this.maxScaleBonus = 3;
        if (screen < 768) {
            this.maxScaleBonus = 1.5;
        } else if (screen < 1024) {
            this.maxScaleBonus = 2;
        }

        this.gridSize.x = Math.ceil(this.canvas.width / this.gridSize.box) + extraOverflowGrid;
        this.gridSize.y = Math.ceil(this.canvas.height / this.gridSize.box) + extraOverflowGrid;
        this.scaleAoeSize = this.gridSize.box * 2;

        this.mouseCoords.x = null;
        this.mouseCoords.y = null;
        this.targetVelocity.x = this.velocity.x;
        this.targetVelocity.y = this.velocity.y;
    }

    clearPaths() {
        this.ctx.clearRect(
            -this.gridSize.box,
            -this.gridSize.box,
            this.canvas.width + extraOverflowGrid * this.gridSize.box,
            this.canvas.height + extraOverflowGrid * this.gridSize.box
        );
    }

    drawPaths() {
        this.ctx.save();
        this.ctx.translate(-this.gridSize.box, -this.gridSize.box);

        for (var y = 0; y < this.gridSize.y; y++) {
            for (var x = 0; x < this.gridSize.x; x++) {
                let currentScale = this.getScaleFromMouseCoords(x, y);
                this.ctx.save();
                this.ctx.scale(currentScale, currentScale);
                this.ctx.fillStyle = this.darkMode ? darkColor : lightColor;
                this.ctx.fill(this.getPathFromAdapter(x, y), "evenodd");
                this.ctx.restore();
                this.ctx.translate(this.gridSize.box, 0);
            }
            // Move to new line
            this.ctx.translate(-this.gridSize.x * this.gridSize.box, this.gridSize.box);
        }

        this.ctx.restore();
    }

    getScaleFromMouseCoords(x, y) {
        if (this.mouseCoords.x == null || this.mouseCoords.y == null) {
            return gridDefaultScale;
        }

        let offCoords = this.getAbsoluteCanvasOffsetCoordinates(0, 0, this.gridSize.box * x, this.gridSize.box * y);
        let distance = Math.hypot(
            this.mouseCoords.x * this.window.devicePixelRatio - offCoords[0] - this.gridSize.box * x,
            this.mouseCoords.y * this.window.devicePixelRatio - offCoords[1] - this.gridSize.box * y
        );

        if (distance > this.scaleAoeSize) {
            return gridDefaultScale;
        }
        return gridDefaultScale + ((this.scaleAoeSize - distance) * this.maxScaleBonus) / this.scaleAoeSize;
    }

    setMouseCoordinates(x, y) {
        this.mouseCoords.x = x;
        this.mouseCoords.y = y;
    }

    getAbsoluteCanvasCoordinates(x, y) {
        let transform = this.ctx.getTransform();

        return [transform.e + x, transform.f + y];
    }

    getAbsoluteCanvasOffsetCoordinates(x, y, xOff, yOff) {
        let transform = this.ctx.getTransform();

        return [transform.e + x - xOff, transform.f + y - yOff];
    }

    getPathFromAdapter(x, y) {
        var index = ((y + this.adapterOffset.y + this.gridSize.y) % this.gridSize.y) * this.gridSize.x;
        index += (x + this.adapterOffset.x + this.gridSize.x) % this.gridSize.x;

        return this.paths[index % SVG_TOTAL];
    }

    moveCanvas() {
        this.ctx.translate(-this.velocity.x, -this.velocity.y);

        var absoluteXY = this.getAbsoluteCanvasCoordinates(0, 0);
        if (absoluteXY[0] >= this.gridSize.box || absoluteXY[0] <= -this.gridSize.box) {
            this.adapterOffset.x -= Math.sign(absoluteXY[0]);
            this.adapterOffset.x = (this.gridSize.x + this.adapterOffset.x) % this.gridSize.x;
            this.ctx.translate(Math.sign(-absoluteXY[0]) * this.gridSize.box, 0);
        }

        if (absoluteXY[1] >= this.gridSize.box || absoluteXY[1] <= -this.gridSize.box) {
            this.adapterOffset.y -= Math.sign(absoluteXY[1]);
            this.adapterOffset.y = (this.gridSize.y + this.adapterOffset.y) % this.gridSize.y;
            this.ctx.translate(0, Math.sign(-absoluteXY[1]) * this.gridSize.box);
        }
    }

    updateVelocities() {
        if (this.mouseCoords.x == null || this.mouseCoords.y == null) {
            return;
        }
        this.targetVelocity.x = clampVelocity(
            ((this.mouseCoords.x - this.window.innerWidth / 2) / (this.window.innerWidth * radialThreshold)) *
                maxVelocity
        );
        this.targetVelocity.y = clampVelocity(
            ((this.mouseCoords.y - this.window.innerHeight / 2) / (this.window.innerHeight * radialThreshold)) *
                maxVelocity
        );

        let deltaX = this.targetVelocity.x - this.velocity.x;
        let deltaY = this.targetVelocity.y - this.velocity.y;

        if (Math.abs(deltaX) < 0.01) {
            this.velocity.x = this.targetVelocity.x;
        } else {
            this.velocity.x += deltaX * (1 - inertia);
        }

        if (Math.abs(deltaY) < 0.01) {
            this.velocity.y = this.targetVelocity.y;
        } else {
            this.velocity.y += deltaY * (1 - inertia);
        }
    }
}

const clampVelocity = (newVelocity) => {
    if (Math.abs(newVelocity) > maxVelocity) {
        return Math.sign(newVelocity) * maxVelocity;
    }

    return newVelocity;
};
