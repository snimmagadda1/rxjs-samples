import { map, mergeMap, Observable, of, pipe, range, retryWhen, tap, throwError, timer, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import './style.css';

const defaultExcludedCodes = [404];

export function backoff
    (
        retries: number = 3,
        delay: number = 1000,
        excludedStatusCodes: number[] = defaultExcludedCodes
    ): <T> (source: Observable<T>) => Observable<T> {
    return pipe(
        retryWhen((attempts) =>
            zip(range(1, retries + 1), attempts).pipe(
                mergeMap(([i, err]) => {
                    return i > retries || excludedStatusCodes?.find(statusCode => statusCode === err.status)
                        ? throwError(err) : of(i);
                }),
                map((i) => i * i),
                mergeMap((v) => timer(v * delay))
            )
        )
    );
}

const http$ = ajax('https://httpstat.us/429');
http$.pipe(backoff()).subscribe((res) => console.log('HTTP request returned', res));