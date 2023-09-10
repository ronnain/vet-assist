import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        loadComponent: () => import('./features/chat/chat.component')
    }
];
