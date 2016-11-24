"use strict";
var rxjs_1 = require("rxjs");
var output = document.getElementById("output");
var button = document.getElementById("button");
var click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    return rxjs_1.Observable.create(function (observer) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });
        xhr.open("GET", url);
        xhr.send();
    });
}
function renderMovies(movies) {
    movies.forEach(function (m) {
        var div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
click.flatMap(function (e) { return load("movies.json"); })
    .subscribe(renderMovies, function (error) { return console.log("error: " + error); }, function () { return console.log("complete"); });
//# sourceMappingURL=main.js.map