import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home').then(m => m.Home)},
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)},
];
