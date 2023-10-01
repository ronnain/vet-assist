import { Component, inject } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, filter, from, map, skip, switchMap, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'pdLogin',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './login.component.html'
})

export default class LoginComponent {

    protected authService = inject(AuthService);
    private router = inject(Router);

    private destroy$ = new Subject<void>();

    authFailed$ = this.authService.isAuth$.pipe(
        skip(1),
        map(isAuth => !isAuth)
    );

    constructor() {
        this.authService.isAuth$.pipe(
            takeUntil(this.destroy$),
            filter(isAuth => isAuth),
            switchMap((isAuth) => {
                return from(this.router.navigate(['stats']));
            })
        ).subscribe()
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}