import './style.css'
import { observable } from './hi'
import { Observer } from 'rxjs';

// no output
const observable1 = observable;
const observable2 = observable;

// logs the Object of class Observable
console.log(observable1);

// implicit observer syntax
observable2.subscribe(out => {
    console.log(out);
});

// explicit observer syntax
const observer1: Observer<any> = {
    next: (x: any) => {
        console.log(`Observer 1 saw ${x}`)
    },
    error: (e: any) => {
        console.error(`Observer 1 error ${e}`)
    },
    complete: () => { console.log('Observer 1 completed') }
};

observable1.subscribe(observer1);