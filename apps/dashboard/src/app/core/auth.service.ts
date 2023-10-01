import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

type Auth = {userName: string, password: string};

@Injectable({providedIn: 'root'})
export class AuthService {

    private router = inject(Router);

    private LOGIN_KEY = 'DASHBOARD_LOGIN_KEY'

    public auth$ = new BehaviorSubject<Auth | undefined>(this.getStoredLogin());

    public isAuth$ = this.auth$.pipe(
        map((auth) => this.isAuthValid(auth))
    )

    public storeLoginOnAuth$ = this.isAuth$.pipe(
        map((isAuth) => {
            if (isAuth) {
                this.storeLogin(this.auth$.value!);
            }
        })
    );

    constructor() {
        this.storeLoginOnAuth$.subscribe();
    }

    private isAuthValid = (auth: Auth | undefined) => {
        if (!auth) {
            return false;
        }
        return auth.userName === 'admin' && auth.password === 'pets'
    }


    private getStoredLogin(): Auth | undefined {

        const auth = localStorage.getItem(this.LOGIN_KEY);

        if (!auth) {
            return undefined;
        }


        return JSON.parse(auth);
    }

    public storeLogin(auth: Auth) {
        localStorage.setItem(this.LOGIN_KEY, JSON.stringify(auth));
    }

    public logout() {
        localStorage.removeItem(this.LOGIN_KEY);
        this.auth$.next(undefined);
        this.router.navigate(['/']);
    }
}