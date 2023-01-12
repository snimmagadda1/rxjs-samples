import './style.css';
import { filter, from, map, of, reduce } from 'rxjs';

// creation operator
const stream$ = of(1, 2, 3, 4, 5);
stream$.subscribe((val) => console.log('of source emits ', val));

// creation operator
const array$ = from([1, 2, 3, 4, 5]);
array$.subscribe((val) => console.log('from source emits ', val));

// pipeable operator
const mappedStream$ = stream$.pipe(map(x => x * 2));
mappedStream$.subscribe((val) => console.log('mapped source emits ', val));

// pipeable operator
const filteredStream$ = stream$.pipe(filter(x => x % 2 === 0));
filteredStream$.subscribe((val) => console.log('filtered source emits ', val));

// pipeable operator
const reduced$ = stream$.pipe(reduce((acc, curr) => acc + curr, 0));
reduced$.subscribe((val) => console.log('reduced source emits ', val));