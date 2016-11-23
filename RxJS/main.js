"use strict";
var rxjs_1 = require("rxjs");
var numbers = [1, 2, 3, 5, 7, 11];
var source = rxjs_1.Observable.from(numbers);
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