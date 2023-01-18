import './style.css';
import { ajax } from 'rxjs/ajax';
import { catchError, map, of, switchMap, take, tap, timer } from 'rxjs';
let count = 0;
const countElement = document.querySelector<HTMLElement>('#count');

if (countElement){
    const getUsers$ = ajax('https://api.github.com/users?per_page=5').pipe(
        map(userResponse => console.log('users: ', userResponse)),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        }),
        tap((_) => countElement.innerHTML = `Made ${++count} requests`)
    );
    
    // Use timer as source to 'poll' the endpoint every 10 seconds
    const poll$ = timer(0, 10000).pipe(switchMap(() => getUsers$));
    
    // Addition of take() to set a maximum of 5 attempts
    poll$.pipe(take(5)).subscribe({
        next: (value: any) => console.log(value),
        error: (err: any) => console.log(err),
        complete: () => console.log('completed poll')
    });
}
