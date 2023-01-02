import { Observable } from 'rxjs';

// input to observable is a function w/ a single input of type Subscriber
export const observable = new Observable(function subscribe(subscriber) {

    // emit hi every sec
    const id = setInterval(() => {
        subscriber.next('hi');
    }, 1000);

    // send complete signal to subscriber after 10 secs
    setTimeout(() => {
        subscriber.complete();
    }, 10000)
});