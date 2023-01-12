import './style.css';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const progressBarFill = document.querySelector('.progress-bar-fill') as HTMLElement;

const progress$ = fromEvent(document, 'scroll').pipe(
    map(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        return (scrollTop / (scrollHeight - clientHeight)) * 100;
    })
);

if (progressBarFill) {
    progress$.subscribe(progress => {
        progressBarFill.style.width = `${progress}%`;
    });
}
