import { Observable } from "rxjs";

export function load(url: string) {

    return Observable.create(observer => {
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

export function loadWithFetch(url: string) {
    return Observable.defer(() => {
        return Observable.fromPromise(fetch(url).then(response => {
            if (response.status == 200) {
                return response.json();
            }
            else {
                return Promise.reject(response);
            }
        }));
    }).retryWhen(retryStrategy());
}

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
            //.takeWhile(accumulator => accumulator < attempts)
            .delay(delay);
    };
}