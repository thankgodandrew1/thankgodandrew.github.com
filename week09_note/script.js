const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
context.fillStyle = 'yellow';
context.fillRect(10, 100, 100, 50);
context.strokeStyle = 'blue';
context.lineWidth = 5;
context.strokeRect(20, 20, 80, 30);
context.beginPath();
context.moveTo(150, 75);
context.lineTo(200, 75);
context.lineTo(200, 25);
context.fill();

const loopCanvas = document.getElementById('loopCanvas');
const ctx = loopCanvas.getContext('2d');
let angle = 0;

function draw() {
    ctx.clearRect(0, 0, loopCanvas.width, loopCanvas.height);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.save();
    ctx.translate(150, 75);
    ctx.rotate(angle);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, -25, 50, 50);
    ctx.restore();
    angle += Math.PI / 180;
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);