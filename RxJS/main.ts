import { Observable } from "rxjs";

let numbers = [1, 2, 3, 5, 7, 11];

let source = Observable.create(observer => {

    let index = 0;

    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 2000);
        }
        else {
            observer.complete();
        }
    };

    produceValue();

});

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);


