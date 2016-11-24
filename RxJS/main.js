"use strict";
var rxjs_1 = require("rxjs");
var output = document.getElementById("output");
var button = document.getElementById("button");
var click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    return rxjs_1.Observable.create(function (observer) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            }
            else {
                observer.error(xhr.statusText);
            }
        });
        xhr.open("GET", url);
        xhr.send();
    }).retryWhen(retryStrategy({ attempts: 3, delay: 1500 }));
}
function retryStrategy(_a) {
    var _b = _a.attempts, attempts = _b === void 0 ? 4 : _b, _c = _a.delay, delay = _c === void 0 ? 1000 : _c;
    return function (errors) {
        return errors
            .scan(function (accumulator, value) {
            console.log(accumulator, value);
            return accumulator + 1;
        }, 0)
            .takeWhile(function (accumulator) { return accumulator < attempts; })
            .delay(delay);
    };
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