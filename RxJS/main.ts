import { Observable, Observer } from "rxjs";

let numbers = [1, 2, 3, 5, 7, 11];

let source = Observable.from(numbers);

// Observers can be created using shorthand with lambdas or
// below with an actual class.
source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);

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


