import './style.css'
import { timer } from 'rxjs';

const timerElement: HTMLElement = document.querySelector<HTMLHeadElement>('#timer')!;
timer(0, 1000).subscribe(t => timerElement.innerHTML = `Hello! It has been ${t} seconds`);
