var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var FACE_X = 150;
var FACE_Y = 150;

// For eye spirals
var a = 1.1;
var b = 1.1;

// For ear spirals
var c = 1.5;
var d = 3;

/* Face */
function drawCenterFace(ctrxface, ctryface, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.beginPath();
    radius = 3;
    ctx.arc(ctrxface,ctryface,radius,0*Math.PI,2*Math.PI); // centerX,centerY,radius,startAngle,endAngle,counterclockwise(false is default)
    ctx.strokeStyle = "#F00";
    ctx.stroke();
    ctx.restore(); // restore saved coordinate system
}
function drawRightEar(centerx, centery, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.translate(centerx,centery);
    ctx.scale(0.6, 0.85);
    ctx.rotate(45 * Math.PI / 180);
    ctx.lineCap = "round";
    ctx.moveTo(0, 0); // the actual center is the position of translate()

    ctx.beginPath();
    for (i = 0; i < 75; i++) {
        angle = 0.1 * i;
        x = (c + d * angle) * Math.cos(angle);
        y = (c + d * angle) * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function drawLeftEar(centerx, centery, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.translate(centerx*2, 0);
    ctx.scale(-1, 1);
    ctx.lineWidth = strkwidth;
    ctx.translate(centerx,centery);
    ctx.scale(0.6, 0.85);
    ctx.rotate(45 * Math.PI / 180);
    ctx.lineCap = "round";
    ctx.moveTo(0, 0); // the actual center is the position of translate()

    ctx.beginPath();
    for (i = 0; i < 75; i++) {
        angle = 0.1 * i;
        x = (c + d * angle) * Math.cos(angle);
        y = (c + d * angle) * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function drawRightEye(centerx, centery, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.translate(centerx,centery);
    ctx.rotate(40 * Math.PI / 180);
    ctx.lineCap = "round";
    ctx.moveTo(0, 0); // the actual center is the position of translate()

    ctx.beginPath();
    for (i = 0; i < 128; i++) {
        angle = 0.1 * i;
        x = (a + b * angle) * Math.cos(angle);
        y = (a + b * angle) * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function drawLeftEye(centerx, centery, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.translate(centerx*2, 0);
    ctx.scale(-1, 1);
    ctx.lineWidth = strkwidth;
    ctx.translate(centerx,centery);
    ctx.rotate(40 * Math.PI / 180);
    ctx.lineCap = "round";
    ctx.moveTo(0, 0); // the actual center is the position of translate()

    ctx.beginPath();
    for (i = 0; i < 128; i++) {
        angle = 0.1 * i;
        x = (a + b * angle) * Math.cos(angle);
        y = (a + b * angle) * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function drawNose(centernosex,centernosey,strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.lineCap = "round";
    ctx.moveTo(centernosex, centernosey); // the actual center is the position of translate()

    ctx.beginPath();
    radius = 10;
    ctx.arc(centernosex,centernosey-radius,radius,0.40*Math.PI,0.60*Math.PI); // centerX,centerY,radius,startAngle,endAngle,counterclockwise(false is default)
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function drawMouth(centermouthx, centermouthy, strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.lineCap = "round";
    ctx.moveTo(centermouthx, centermouthy); // the actual center is the position of translate()

    ctx.beginPath();
    radius = 80;
    ctx.arc(centermouthx,centermouthy-radius,radius,0.44*Math.PI,0.56*Math.PI); // centerX,centerY,radius,startAngle,endAngle,counterclockwise(false is default)
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.restore(); // restore saved coordinate system
}
function spindaFace(centerxface,centeryface,drawcenter) {
    // Size 110x87
    if (drawcenter)
        drawCenterFace(centerxface, centeryface-12, 1);

    drawLeftEar(centerxface-42,centeryface-41,4);
    drawRightEar(centerxface+42,centeryface-41,4);
    drawLeftEye(centerxface-24,centeryface+10,3);
    drawRightEye(centerxface+24,centeryface+10,3);
    drawNose(centerxface,centeryface+19,2);
    drawMouth(centerxface,centeryface+30,1);
}


/* Body (frame) */
function bodyMask() {
  ctx.save(); // save current coordinate system
  var img = new Image();
  img.src = "mask.png";
  img.onload = function (e) {
    ctx.drawImage(img, 0, 0);
  }
  ctx.restore(); // restore saved coordinate system
}


/* Background (texture) */
function bodyTexture(bgColor,dtColor) {
    var minRadius = 8;
    var maxRadius = 20;
    var minMarg = 40;
    var maxMarg = canvas.width-minMarg;
    var radius = Math.floor(Math.random() * maxRadius) + minRadius;
    var numberOfDots = Math.floor(Math.random() * 15) + 6;
    var posX = Math.floor(Math.random()*(maxMarg-minMarg+1)+minMarg);
    var posY = Math.floor(Math.random()*(maxMarg-minMarg+1)+minMarg);

    ctx.save(); // save current coordinate system
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = dtColor;
    for (var i = 0; i < numberOfDots; i++) {
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        ctx.fill();

        radius = Math.floor(Math.random() * maxRadius) + minRadius;
        posX = Math.floor(Math.random()*(maxMarg-minMarg+1)+minMarg);
        posY = Math.floor(Math.random()*(maxMarg-minMarg+1)+minMarg);
    }
    ctx.restore(); // restore saved coordinate system
}


/* Draw Spinda */
function drawSpinda(colorA,colorB){
    bodyTexture(colorA,colorB);
    bodyMask();
    spindaFace(FACE_X,FACE_Y,false);
}


/* Calls and events */
document.getElementById("spindabtn").onclick = function() {
    var colorOne = "#"+document.getElementById("spindabg").value;
    var colorTwo = "#"+document.getElementById("spindadt").value;
    console.log(colorOne);
    drawSpinda(colorOne,colorTwo);
};

drawSpinda("#ddc8a8","#d1574c");
// Red   #d1574c
// White #ddc8a8
