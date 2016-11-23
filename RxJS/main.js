"use strict";
var rxjs_1 = require("rxjs");
var numbers = [1, 2, 3, 5, 7, 11];
var source = rxjs_1.Observable.create(function (observer) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        observer.next(n);
    }
    observer.complete();
});
// Observers can be created using shorthand with lambdas or
// below with an actual class.
source.subscribe(function (value) { return console.log("value: " + value); }, function (error) { return console.log("error: " + error); }, function () { return console.log("complete"); });
// class MyObserver implements Observer<number> {
//
//     next(value) {
//         console.log(`value: ${value}`);
//     }
//
//     error(e) {
//         console.log(`error: ${e}`);
//     }
//
//     complete() {
//         console.log("complete");
//     }
// }
//# sourceMappingURL=main.js.map