import { Observable } from "rxjs";

let numbers = [1, 2, 3, 5, 7, 11];

let source = Observable.create(observer => {

    let index = 0;

    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 1000);
        }
        else {
            observer.complete();
        }
    };

    produceValue();

}).map(n => n * 3).filter(n => n > 5);

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);


