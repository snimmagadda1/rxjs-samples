import { fromEvent } from 'rxjs';
import './style.css';

const observer = {
    next: (val: any) => console.log('button clicked', val),
    error: (err: any) => console.log('error', err),
    complete: () => console.log('complete!')
};

const button = document.querySelector('#cool-button');

if (button) {
    const clickStream = fromEvent(button, 'click');
    clickStream.subscribe(observer);
}

