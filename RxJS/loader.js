"use strict";
const rxjs_1 = require("rxjs");
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
exports.load = load;
function loadWithFetch(url) {
    return rxjs_1.Observable.defer(() => {
        return rxjs_1.Observable.fromPromise(fetch(url).then(response => {
            if (response.status == 200) {
                return response.json();
            }
            else {
                return Promise.reject(response);
            }
        }));
    });
}
exports.loadWithFetch = loadWithFetch;
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
exports.retryStrategy = retryStrategy;
//# sourceMappingURL=loader.js.map