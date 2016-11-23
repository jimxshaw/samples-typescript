//import { Observable } from "rxjs";
"use strict";
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var numbers = [1, 2, 3, 5, 7, 11];
var source = Observable_1.Observable.create(function (observer) {
    var index = 0;
    var produceValue = function () {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 1000);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
}).map(function (n) { return n * 3; }).filter(function (n) { return n > 5; });
source.subscribe(function (value) { return console.log("value: " + value); }, function (error) { return console.log("error: " + error); }, function () { return console.log("complete"); });
//# sourceMappingURL=main.js.map