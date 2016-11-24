"use strict";
var rxjs_1 = require("rxjs");
var output = document.getElementById("output");
var button = document.getElementById("button");
var click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        var movies = JSON.parse(xhr.responseText);
        movies.forEach(function (m) {
            var div = document.createElement("div");
            div.innerText = m.title;
            output.appendChild(div);
        });
    });
    xhr.open("GET", url);
    xhr.send();
}
click.subscribe(function (e) { return load("movies.json"); }, function (error) { return console.log("error: " + error); }, function () { return console.log("complete"); });
//# sourceMappingURL=main.js.map