# Restarting a task

From the RxJS docs:

> Observables are lazy Push collections of multiple values.

If we analyze this further, we find that 'collections of multiple values' can come from many different sources. If we have a function, a.k.a a task, that does some business logic or I/O, we can wrap it in an Observable to create a 'lazy' version. The task will now restart whenever the wrapped function (now an observable) is subscribed to.

This pattern is very common and extremely useful. For example, this can be used in an autocomplete to do some work after each user input or for refreshing data after user actions.

This example depicts work with a single function `task`. To simulate an asynchronous operation, the function is wrapped into an observable with the `timer operator` and a 1 second dealy. The 'restarts' to the task are driven by clicking the button:

```typescript
if (btn && container) {
    fromEvent(btn, 'click').pipe(
        switchMap(_ => task$)
    ).subscribe();
}
```

## Useful links

- [Observable](https://rxjs.dev/guide/observable)
