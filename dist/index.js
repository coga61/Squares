"use strict";
var _a;
document.getElementById("hellocontainer").innerText = "hello world";
function draw(figure) {
    var canvas = document.querySelector('#myCanvas');
    var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.rect(0, 0, figure.heigth, figure.length);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
}
(_a = document.querySelector('#drawSquare')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var inputHeigth = document.querySelector('#squareHeigth');
    var inputLength = document.querySelector('#squareLength');
    if (!(inputHeigth === null || inputHeigth === void 0 ? void 0 : inputHeigth.value) || !(inputLength === null || inputLength === void 0 ? void 0 : inputLength.value))
        return;
    var mySquare = { heigth: Number(inputHeigth.value), length: Number(inputLength.value) };
    draw(mySquare);
});
