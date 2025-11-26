import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'pipes básicos',
        loadComponent: () => import('./pages/basic-page/basic-page'),
    },
    {
        path: 'custom',
        title: 'pipes custom',
        loadComponent: () => import('./pages/custom-page/custom-page'),
    },
    {
        path: 'numeric',
        title: 'pipes numéricos',
        loadComponent: () => import('./pages/numbers-page/numbers-page'),
    },
    {
        path: 'uncommon',
        title: 'pipes poco comunes',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];
