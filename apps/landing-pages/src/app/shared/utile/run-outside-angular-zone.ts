import { inject, NgZone } from "@angular/core";
import { Observable, Subject, Subscription, finalize } from "rxjs";

export const runOutsideAngularZone = <T>() => (source$: Observable<T>) => {
    // Get access to ngZone
    const ngZone = inject(NgZone);

    // Create a subject of the same generic type
    // as the source observable
    const sub$$ = new Subject<T>();

    // Declare the subscription here, we need to clean it up later
    let subscription: Subscription;

    // Run the actual subscription that executes an
    // addEventListener outside of Angular, so that
    // Change Detection won't be triggered automatically
    ngZone.runOutsideAngular(() => {
        subscription = source$.subscribe(sub$$);
    });

    // Return the subject but be sure to unsubscribe from
    // the source observable when the subject completes
    // or errors
    return sub$$.pipe(
        finalize(() => {
            subscription.unsubscribe();
        })
    );
};