# Observable Subscription Management

Observables offer the benefit of being able to be canceled, allowing the consumer to inform the producer that they no longer wish to receive any more values.

When you subscribe to an observable, a subscription object is returned. You will notice that the complete callback of the observer is not called on unsubscribe(). The complete callback is only fired for complete notifications that occur within the observable.

## Useful links

- [Subscriptions](https://rxjs.dev/guide/subscription)
