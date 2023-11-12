import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: ':offer/:price',
        loadComponent: () => import('./landing-page-1/landing-page-1.component')
    },
    {
        path: '**',
        redirectTo: '4/1'
    }
];
