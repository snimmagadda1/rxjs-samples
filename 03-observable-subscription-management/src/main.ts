import { Observable } from 'rxjs';
import './style.css'

const observable = new Observable(subscriber => {
    let count = 0;

    const id = setInterval(() => {
        subscriber.next(count);
        count += 1;
    }, 1000);

    console.log('called');
});


const observer = {
    next: (value: any) => console.log('next', value),
    error: (error: any) => console.log('error', error),
    complete: () => console.log('complete!')
};

const subscription = observable.subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe()
}, 10000);
