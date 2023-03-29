# HTTP Retry with Backoff

Implementing exponential backoff with promises and other methods becomes complex. Using RxJS, the technique becomes relatively simple to script. The example here leverages the `retryWhen` operator to orchestrate the error catching & retry logic. It does the following:

1. Subscribes to a source observable
2. When a new value arrives from a source observable, send the value to the observer
3. If the source observable throws an error, execute a callback function and subscribe to the returned guiding observable
4. When a new value arrives from the guiding observable, re-subscribe to the original source
5. If the guiding observable completes or throws an error, send the complete or error notification to the observer
6. Once the source observable completes, send the complete notification to the observer

```yaml
Retry time graph:


 10000|
      |
  8000|                 •
      |                 Retry attempt 3
  6000|
      |
  4000|        •
      |        Retry attempt 2
  2000|
      |
  1000| •
      | Retry attempt 1
      +---------------------
         1       2       3
```

## Useful links

- [Angular blog](https://angular.io/guide/practical-observable-usage#exponential-backoff)
- [Retrying failed http requests](https://www.indellient.com/blog/retrying-failed-http-requests-using-exponential-backoff-rxjs-and-http-interceptors-in-angular/)
- [inDepth.dev retryWhen](https://indepth.dev/reference/rxjs/operators/retry-when)
