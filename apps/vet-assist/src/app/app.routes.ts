import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    },
    {
        path: 'post',
        loadComponent: () => import('./posts/post/post.component')
    },
    {
        path: 'chat',
        loadComponent: () => import('./chat/chat.component')
    }
];
