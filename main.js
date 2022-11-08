let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let mouseX, mouseY;

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}

let rectX = 200;
let rectY = 150;
let circX = 150;
let circY = 150;

if (rectX <= mouseX <= rectX + 100 && rectY <= mouseY <= rectY + 60) {
    rectX = Math.random();
    rectY = Math.random();
}

requestAnimationFrame(animate);
function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);


    ctx.beginPath
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 4;
    ctx.strokeRect(rectX, rectY, 100, 60);

    ctx.strokeStyle = "(255, 255, 255)";
    ctx.beginPath();
    ctx.arc(circX, circY, 100, 0, 2 * Math.PI);
    ctx.stroke();

    requestAnimationFrame(animate)
}