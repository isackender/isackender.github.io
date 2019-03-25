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
        drawCenterFace(centerxface, centeryface, 1);

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

function bodyCanvas(centerx,centery,bgColor,dtColor) {
    ctx.save(); // save current coordinate system
    ctx.translate(centerx,centery);

    ctx.beginPath();
    ctx.moveTo(-40, 27);
    ctx.quadraticCurveTo(-45,31, -52,27);                  //  Top     Left    arm     a
    ctx.quadraticCurveTo(-56,21, -58,28);                  //  Top     Left    arm     b
    ctx.quadraticCurveTo(-66,45, -33,50);                  //          Left    arm     b
    ctx.lineTo(-26,40);
    ctx.closePath();
    ctx.clip();


    // Draw texture here
    ctx.translate(-149,-149);
    ctx.moveTo(0,0);
    bodyTexture(bgColor,dtColor);
    ctx.restore(); // restore saved coordinate system


    ctx.save(); // save current coordinate system
    ctx.translate(centerx,centery);

    ctx.beginPath();
    ctx.moveTo(-27, -24); // the actual center is the position of translate()
    ctx.quadraticCurveTo(0,-42, 27,-24);                    //  Top             head
    ctx.quadraticCurveTo(34,-79, 63,-65);                   //          Right   ear     a
    ctx.quadraticCurveTo(82,-46, 40,-8);                    //          Right   ear     b
    ctx.lineTo(43,-8);                                      //  s       Right   ear
    ctx.quadraticCurveTo(56,27, 16,43);                     //          Right   face
    ctx.lineTo(22,41);                                      //  s       Right   face
    ctx.bezierCurveTo(31,41, 32,39, 41,46);                 //  Top     Right   arm     a
    ctx.bezierCurveTo(50,44, 52,44, 49,51);                 //  Top     Right   arm     b
    ctx.bezierCurveTo(44,65, 32,67, 17,59);                 //  Bottom  Right   arm     b
    ctx.bezierCurveTo(22,63, 22,63, 27,64);                 //  sBottom Right   arm     b
    ctx.quadraticCurveTo(34,80, 22,95);                     //          Right   leg     a
    ctx.lineTo(12,96);                                      //          Right   foot
    ctx.quadraticCurveTo(8,94, 6,91);                       //          Right   leg     b
    ctx.quadraticCurveTo(2,94, -5,93);                      //  Between         legs    b
    ctx.quadraticCurveTo(-7,103, -14,108);                  //          Left    leg     a
    ctx.lineTo(-24,108);                                    //          Left    foot
    ctx.quadraticCurveTo(-55,71, -26,40);                   //          Left    leg     b
    ctx.quadraticCurveTo(-22,42, -16,43);                   //  s       Left    face
    ctx.quadraticCurveTo(-56,27, -43,-8);                   //          Left    face
    ctx.lineTo(-40,-8);                                     //  s       Left    ear
    ctx.quadraticCurveTo(-82,-46, -63,-65);                 //          Left    ear     a
    ctx.quadraticCurveTo(-34,-79, -27,-24);                 //          Right   ear     b
    ctx.closePath();
    ctx.clip();

    ctx.translate(-149,-149);
    ctx.moveTo(0,0);
    bodyTexture(bgColor,dtColor);

    ctx.restore(); // restore saved coordinate system
}

function drawBody(centerx,centery,strkwidth) {
    ctx.save(); // save current coordinate system
    ctx.lineWidth = strkwidth;
    ctx.translate(centerx,centery);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(-40, 27);
    ctx.quadraticCurveTo(-45,31, -52,27);                  //  Top     Left    arm     a
    ctx.quadraticCurveTo(-56,21, -58,28);                  //  Top     Left    arm     b
    ctx.quadraticCurveTo(-66,45, -33,50);                  //          Left    arm     b
    ctx.lineTo(-26,40);
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-27, -24); // the actual center is the position of translate()
    ctx.quadraticCurveTo(0,-42, 27,-24);                    //  Top             head
    ctx.quadraticCurveTo(34,-79, 63,-65);                   //          Right   ear     a
    ctx.quadraticCurveTo(82,-46, 40,-8);                    //          Right   ear     b
    ctx.lineTo(43,-8);                                      //  s       Right   ear
    ctx.quadraticCurveTo(56,27, 16,43);                     //          Right   face
    ctx.lineTo(22,41);                                      //  s       Right   face
    ctx.bezierCurveTo(31,41, 32,39, 41,46);                 //  Top     Right   arm     a
    ctx.bezierCurveTo(50,44, 52,44, 49,51);                 //  Top     Right   arm     b
    ctx.bezierCurveTo(44,65, 32,67, 17,59);                 //  Bottom  Right   arm     b
    ctx.bezierCurveTo(22,63, 22,63, 27,64);                 //  sBottom Right   arm     b
    ctx.quadraticCurveTo(34,80, 22,95);                     //          Right   leg     a
    ctx.lineTo(12,96);                                      //          Right   foot
    ctx.quadraticCurveTo(8,94, 6,91);                       //          Right   leg     b
    ctx.quadraticCurveTo(2,94, -5,93);                      //  Between         legs    b
    ctx.quadraticCurveTo(-7,103, -14,108);                  //          Left    leg     a
    ctx.lineTo(-24,108);                                    //          Left    foot
    ctx.quadraticCurveTo(-55,71, -26,40);                   //          Left    leg     b
    ctx.quadraticCurveTo(-22,42, -16,43);                   //  s       Left    face
    ctx.quadraticCurveTo(-56,27, -43,-8);                   //          Left    face
    ctx.lineTo(-40,-8);                                     //  s       Left    ear
    ctx.quadraticCurveTo(-82,-46, -63,-65);                 //          Left    ear     a
    ctx.quadraticCurveTo(-34,-79, -27,-24);                 //          Right   ear     b
    ctx.closePath();
    ctx.stroke();

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
}


/* Draw Spinda */
function drawSpinda(colorA,colorB){
    //Background white
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Clip shape and tesxture
    bodyCanvas(FACE_X,FACE_Y,colorA,colorB);
    // Draw Face on top of everything
    spindaFace(FACE_X,FACE_Y,false);
    // Draw stroke on the edge of the cliping area
    drawBody(FACE_X,FACE_Y,3);
}


/* Calls and events */
document.getElementById("spindabtn").onclick = function() {
    var colorOne = "#"+document.getElementById("spindabg").value;
    var colorTwo = "#"+document.getElementById("spindadt").value;
    drawSpinda(colorOne,colorTwo);
};

drawSpinda("#ddc8a8","#d1574c");
// Red   #d1574c
// White #ddc8a8





// /* Coordinates cursor */
// var coord = document.createElement("div");
// var node = document.createTextNode("0,0");
// coord.appendChild(node);
// document.body.appendChild(coord);
// coord.style.position = "fixed";
//
// canvas.onmousemove = handleMouseMove;
//
// function handleMouseMove(event) {
//     var x=event.pageX;
//     var y=event.pageY;
//     var posX = x-677;
//     var posY = y-150;
//     coord.innerText = ""+posX+", "+posY+"";
//     coord.style.left = event.clientX+10+"px";
//     coord.style.top = event.clientY+10+"px";
// }
