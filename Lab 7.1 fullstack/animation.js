const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "Flamengo.png";
const maxSize = 80;

let larguraImg;
let alturaImg;

img.onload = function() {
    if (img.width > img.height) {
        larguraImg = maxSize;
        alturaImg = (img.height / img.width) * maxSize;
    } else {
        alturaImg = maxSize;
        larguraImg = (img.width / img.height) * maxSize;
    }
};

canvas.addEventListener("mousemove", function(e) {
    const rect = canvas.getBoundingClientRect();

    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    let x = mouseX - larguraImg / 2;
    let y = mouseY - alturaImg / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + larguraImg > canvas.width) x = canvas.width - larguraImg;
    if (y + alturaImg > canvas.height) y = canvas.height - alturaImg;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, larguraImg, alturaImg);
});