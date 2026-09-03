const canvas: HTMLCanvasElement = document.querySelector(
  "#editor",
) as HTMLCanvasElement;
const textarea: HTMLTextAreaElement = document.querySelector(
  "#input-text",
) as HTMLTextAreaElement;
let isCaretVisible = true;
textarea.addEventListener("keyup", () => {
  isCaretVisible = false;
  console.log(textarea.value);
  textarea.value = "";
});

setInterval(() => {
  isCaretVisible = !isCaretVisible;
  render();
}, 500);
canvas.addEventListener("mousedown", (event) => {
  event.preventDefault();
  textarea.focus();
  console.log("clicked");
});
const size = 200;

canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

const scale = window.devicePixelRatio;

canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

const ctx = canvas.getContext("2d");
if (ctx) {
  ctx.scale(scale, scale);
  ctx.font = "16px monospace";
}

function render() {
  if (!ctx) return;
  if (ctx) {
    ctx.clearRect(0, 0, size, size);
    ctx.fillText("Hello, World!", 10, 30);
    if (isCaretVisible) {
      ctx.fillRect(135, 15, 3, 20);
    }
  } else {
    console.error("Failed to get 2D context");
  }
}
