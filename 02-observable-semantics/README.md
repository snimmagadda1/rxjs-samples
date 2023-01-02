# The semantics of using observables

> An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.

The example shows defining an observable that emits 'hi' every second for 10 seconds using the syntax `new Observable`. Two instances of the defined observable are subscribed to by an observers to deliver `next` / `error` / `complete` notifications. The output is viewable in the browser console.

I came to reactive programming with a Kafka background. Therefore, push-based systems were a bit nebulous to me. After reading how the [RxJS docs](https://rxjs.dev/guide/observable#pull-versus-push) describe an Observable, I wanted to understand the low-level semantics of defining observable and getting values.

## Useful links

- [timer](https://rxjs.dev/api/index/function/timer)
