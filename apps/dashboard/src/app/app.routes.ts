import { inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { iif, map, of, switchMap, take, tap } from 'rxjs';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./login/login.component'),
        canActivate: [
            () => {
                const router = inject(Router);
                return inject(AuthService).isAuth$.pipe(
                    take(1),
                    tap((isAuth) => {
                        if (isAuth) {
                            router.navigate(['stats']);
                        }
                    }),
                    map((isAuth) => !isAuth)
                );
            }
        ]
    },
    {
        path: 'stats',
        canActivate: [
            () => {
                const router = inject(Router);
                return inject(AuthService).isAuth$.pipe(
                    take(1),
                    tap((isAuth) => {
                        if (!isAuth) {
                            router.navigate(['']);
                        }
                    }),
                )
            }
        ],
        children: [
            {
                path: 'offers',
                loadComponent: () => import('./stats/offer.component')
            },
            {
                path: '',
                redirectTo: 'offers',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
