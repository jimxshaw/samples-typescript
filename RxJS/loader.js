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
    }).retryWhen(retryStrategy());
}
exports.loadWithFetch = loadWithFetch;
function retryStrategy({ attempts = 4, delay = 1000 } = {}) {
    return function (errors) {
        return errors
            .scan((accumulator, value) => {
            accumulator += 1;
            if (accumulator < attempts) {
                return accumulator;
            }
            else {
                throw new Error(value);
            }
        }, 0)
            .delay(delay);
    };
}
//# sourceMappingURL=loader.js.map