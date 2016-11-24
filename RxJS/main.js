"use strict";
var rxjs_1 = require("rxjs");
var circle = document.getElementById("circle");
var source = rxjs_1.Observable.fromEvent(document, "mousemove")
    .map(function (e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
})
    .filter(function (value) { return value.x < 500; })
    .delay(300);
function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}
source.subscribe(onNext, function (error) { return console.log("error: " + error); }, function () { return console.log("complete"); });
//# sourceMappingURL=main.js.map