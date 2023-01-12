# Progress Bar

The example uses `fromEvent()` to track the scroll progress of the document. The event data is then mapped to calculate the scroll percentage. The resulting percentage is subscribed to and used to set the width of the `.progress-bar` element.

```typescript
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

```

## Useful links

- [fromEvent](https://rxjs.dev/api/index/function/fromEvent)
- [map](https://rxjs.dev/api/index/function/map)
