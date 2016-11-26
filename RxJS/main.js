"use strict";
const rxjs_1 = require("rxjs");
const loader_1 = require("./loader");
let output = document.getElementById("output");
let button = document.getElementById("button");
let click = rxjs_1.Observable.fromEvent(button, "click");
function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
click.flatMap(e => loader_1.loadWithFetch("movies.json"))
    .subscribe(renderMovies, error => console.log(`error: ${error}`), () => console.log("complete"));
//# sourceMappingURL=main.js.map