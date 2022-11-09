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
let rectY = 270;
let circX = 550;
let circY = 300;
let r1 = 255;
let g1 = 255;
let b1 = 255;
let r2 = 255;
let g2 = 255;
let b2 = 255;

requestAnimationFrame(animate);
function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    if (rectX <= mouseX && mouseX <= rectX + 100 && rectY <= mouseY && mouseY <= rectY + 60) {
        rectX = Math.random() * 700;
        rectY = Math.random() * 540;
        r1 = Math.trunc(Math.random() * 255);
        g1 = Math.trunc(Math.random() * 255);
        b1 = Math.trunc(Math.random() * 255);
    }
    
    if (circX - 50 <= mouseX && mouseX <= circX + 50 && circY - 50 <= mouseY && mouseY <= circY + 50) {
        circX = (Math.random() * 700) + 50;
        circY = (Math.random() * 500) + 50;
        r2 = Math.trunc(Math.random() * 255);
        g2 = Math.trunc(Math.random() * 255);
        b2 = Math.trunc(Math.random() * 255);
        console.log(r2);
    }

    if (r1 <= 0 && g1 <= 0 && b1 <= 0) {
        r1 = 255;
        g1 = 255;
        b1 = 255;
    }

    if (r2 <= 0 && g2 <= 0 && b2 <= 0) {
        r2 = 255;
        g2 = 255;
        b2 = 255;
    }

    ctx.beginPath;
    ctx.strokeStyle = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
    ctx.lineWidth = 4;
    ctx.strokeRect(rectX, rectY, 100, 60);

    ctx.strokeStyle = "rgb(2" + r2 + ", " + g2 + ", " + b2 + ")";
    ctx.beginPath();
    ctx.arc(circX, circY, 50, 0, 2 * Math.PI);
    ctx.stroke();

    requestAnimationFrame(animate)
}