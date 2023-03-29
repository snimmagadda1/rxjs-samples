import { fromEvent, switchMap, tap, timer } from 'rxjs';
import './style.css';

const task = () => {
    const d = document.createElement('DIV');
    d.classList.add('child');
    d.innerText = 'New Item';
    container.appendChild(d);
};

const task$ = timer(1000).pipe(
    tap(_ => task())
);

const container = document.body as HTMLElement;

const btn = document.querySelector('.btn');

// Drive the work to be restarted by button clicks
if (btn && container) {
    fromEvent(btn, 'click').pipe(
        switchMap(_ => task$)
    ).subscribe();
}
