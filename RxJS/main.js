"use strict";
const rxjs_1 = require("rxjs");
let output = document.getElementById("output");
let button = document.getElementById("button");
let click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    return rxjs_1.Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
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
function loadWithFetch(url) {
}
function retryStrategy({ attempts = 4, delay = 1000 }) {
    return function (errors) {
        return errors
            .scan((accumulator, value) => {
            console.log(accumulator, value);
            return accumulator + 1;
        }, 0)
            .takeWhile(accumulator => accumulator < attempts)
            .delay(delay);
    };
}
function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
click.flatMap(e => load("movies.json"))
    .subscribe(renderMovies, error => console.log(`error: ${error}`), () => console.log("complete"));
//# sourceMappingURL=main.js.map