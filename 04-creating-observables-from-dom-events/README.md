# Creating Observables from DOM Events

This example uses a creation operator to log when a user clicks a button.

RxJS creation operators are functions that create new Observables. These operators are useful for generating data on-demand or for creating Observables from things. One such operator is `fromEvent`, which creates an Observable that emits events from a DOM element. This is very useful when developing web applications around user input.

The fromEvent operator takes two arguments: the DOM element to bind to, and the name of the event to listen for. For example, you might use fromEvent to create an Observable that emits a stream of mousemove events from the document object, like this:

```typescript
import { fromEvent } from 'rxjs';

const mouseMoveStream = fromEvent(document, 'click');
```

You can then subscribe to the resulting Observable and perform any desired operations on the events emitted by the stream.

## Useful links

- [Operators](https://rxjs.dev/guide/operators)
- [fromEvent](https://rxjs.dev/api/index/function/fromEvent)
