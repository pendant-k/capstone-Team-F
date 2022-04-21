import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const remove = document.getElementById("jsRemove");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

const beginPath = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
};

const strokePath = (x, y) => {
    ctx.lineTo(x, y);
    ctx.stroke();
};

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        beginPath(x, y);
        // getSocket().emit(window.events.beginPath, { x, y });
    } else {
        strokePath(x, y);
        // getSocket().emit(window.events.strokePath, { x, y });
    }
}

function handleRemove() {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleCM(event) {
    event.preventDefault();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("contextmenu", handleCM);
}

if (remove) {
    remove.addEventListener("click", handleRemove);
}

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y }) => strokePath(x, y);
